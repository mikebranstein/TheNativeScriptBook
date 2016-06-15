var frameCommon = require("./frame-common");
var pages = require("ui/page");
var transitionModule = require("ui/transition");
var trace = require("trace");
var observable_1 = require("data/observable");
var application = require("application");
var types = require("utils/types");
global.moduleMerge(frameCommon, exports);
var TAG = "_fragmentTag";
var HIDDEN = "_hidden";
var INTENT_EXTRA = "com.tns.activity";
var BACKSTACK_TAG = "_backstackTag";
var IS_BACK = "_isBack";
var NAV_DEPTH = "_navDepth";
var CLEARING_HISTORY = "_clearingHistory";
var FRAMEID = "_frameId";
var FRAGMENT = "_FRAGMENT";
var navDepth = -1;
var activityInitialized = false;
function onFragmentShown(fragment) {
    trace.write("SHOWN " + fragment.getTag(), trace.categories.NativeLifecycle);
    if (fragment[CLEARING_HISTORY]) {
        trace.write(fragment.getTag() + " has been shown, but we are currently clearing history. Returning.", trace.categories.NativeLifecycle);
        return null;
    }
    var frame = fragment.frame;
    var entry = fragment.entry;
    var page = entry.resolvedPage;
    var currentNavigationContext;
    var navigationQueue = frame._navigationQueue;
    for (var i = 0; i < navigationQueue.length; i++) {
        if (navigationQueue[i].entry === entry) {
            currentNavigationContext = navigationQueue[i];
            break;
        }
    }
    var isBack = currentNavigationContext ? currentNavigationContext.isBackNavigation : false;
    frame._addView(page);
    if (!frame.isLoaded) {
        frame._currentEntry = entry;
        frame.onLoaded();
    }
    transitionModule._onFragmentShown(fragment, isBack);
}
function onFragmentHidden(fragment, destroyed) {
    trace.write("HIDDEN " + fragment.getTag(), trace.categories.NativeLifecycle);
    if (fragment[CLEARING_HISTORY]) {
        trace.write(fragment.getTag() + " has been hidden, but we are currently clearing history. Clearing any existing transitions.", trace.categories.NativeLifecycle);
        transitionModule._clearBackwardTransitions(fragment);
        transitionModule._clearForwardTransitions(fragment);
    }
    var isBack = fragment.entry[IS_BACK];
    fragment.entry[IS_BACK] = undefined;
    transitionModule._onFragmentHidden(fragment, isBack, destroyed);
}
var Frame = (function (_super) {
    __extends(Frame, _super);
    function Frame() {
        _super.call(this);
        this._containerViewId = -1;
        this._android = new AndroidFrame(this);
        this._listener = new android.view.View.OnAttachStateChangeListener({
            onViewAttachedToWindow: this.onNativeViewAttachedToWindow.bind(this),
            onViewDetachedFromWindow: this.onNativeViewDetachedToWindow.bind(this)
        });
    }
    Object.defineProperty(Frame, "defaultAnimatedNavigation", {
        get: function () {
            return frameCommon.Frame.defaultAnimatedNavigation;
        },
        set: function (value) {
            frameCommon.Frame.defaultAnimatedNavigation = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Frame, "defaultTransition", {
        get: function () {
            return frameCommon.Frame.defaultTransition;
        },
        set: function (value) {
            frameCommon.Frame.defaultTransition = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Frame.prototype, "containerViewId", {
        get: function () {
            return this._containerViewId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Frame.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Frame.prototype, "_nativeView", {
        get: function () {
            return this._android.rootViewGroup;
        },
        enumerable: true,
        configurable: true
    });
    Frame.prototype._navigateCore = function (backstackEntry) {
        trace.write(this + "._navigateCore(page: " + backstackEntry.resolvedPage + ", backstackVisible: " + this._isEntryBackstackVisible(backstackEntry) + ", clearHistory: " + backstackEntry.entry.clearHistory + "), navDepth: " + navDepth, trace.categories.Navigation);
        var activity = this._android.activity;
        if (!activity) {
            var currentActivity = this._android.currentActivity;
            if (currentActivity) {
                startActivity(currentActivity, this._android.frameId);
            }
            this._delayedNavigationEntry = backstackEntry;
            return;
        }
        var manager = activity.getFragmentManager();
        var isFirstNavigation = types.isNullOrUndefined(this._currentEntry);
        backstackEntry.isNavigation = true;
        if (this._currentEntry) {
            this._currentEntry.isNavigation = true;
        }
        if (backstackEntry.entry.clearHistory) {
            var backStackEntryCount = manager.getBackStackEntryCount();
            var i = backStackEntryCount - 1;
            var fragment = void 0;
            while (i >= 0) {
                fragment = manager.findFragmentByTag(manager.getBackStackEntryAt(i--).getName());
                trace.write(fragment.getTag() + "[CLEARING_HISTORY] = true;", trace.categories.NativeLifecycle);
                fragment[CLEARING_HISTORY] = true;
            }
            if (this.currentPage) {
                fragment = manager.findFragmentByTag(this.currentPage[TAG]);
                if (fragment) {
                    fragment[CLEARING_HISTORY] = true;
                    trace.write(fragment.getTag() + "[CLEARING_HISTORY] = true;", trace.categories.NativeLifecycle);
                }
            }
            if (backStackEntryCount) {
                var firstEntryName = manager.getBackStackEntryAt(0).getName();
                trace.write("manager.popBackStack(" + firstEntryName + ", android.app.FragmentManager.POP_BACK_STACK_INCLUSIVE);", trace.categories.NativeLifecycle);
                manager.popBackStack(firstEntryName, android.app.FragmentManager.POP_BACK_STACK_INCLUSIVE);
            }
            this._currentEntry = null;
            navDepth = -1;
        }
        navDepth++;
        var fragmentTransaction = manager.beginTransaction();
        var currentFragmentTag;
        var currentFragment;
        if (this.currentPage) {
            currentFragmentTag = this.currentPage[TAG];
            currentFragment = manager.findFragmentByTag(currentFragmentTag);
        }
        var newFragmentTag = "fragment" + navDepth;
        var newFragment = new FragmentClass();
        var args = new android.os.Bundle();
        args.putInt(FRAMEID, this._android.frameId);
        newFragment.setArguments(args);
        var animated = this._getIsAnimatedNavigation(backstackEntry.entry);
        var navigationTransition = this._getNavigationTransition(backstackEntry.entry);
        if (currentFragment) {
            transitionModule._clearForwardTransitions(currentFragment);
            if (animated && navigationTransition) {
                transitionModule._setAndroidFragmentTransitions(navigationTransition, currentFragment, newFragment, fragmentTransaction);
            }
        }
        newFragment.frame = this;
        newFragment.entry = backstackEntry;
        backstackEntry[FRAGMENT] = newFragment;
        backstackEntry[BACKSTACK_TAG] = newFragmentTag;
        backstackEntry[NAV_DEPTH] = navDepth;
        backstackEntry.resolvedPage[TAG] = newFragmentTag;
        if (isFirstNavigation) {
            fragmentTransaction.add(this.containerViewId, newFragment, newFragmentTag);
            trace.write("fragmentTransaction.add(" + newFragmentTag + ");", trace.categories.NativeLifecycle);
        }
        else {
            if (this.android.cachePagesOnNavigate && !backstackEntry.entry.clearHistory) {
                if (currentFragment) {
                    fragmentTransaction.hide(currentFragment);
                    trace.write("fragmentTransaction.hide(" + currentFragmentTag + ");", trace.categories.NativeLifecycle);
                }
                else {
                    trace.write("Could not find " + currentFragmentTag + " to hide.", trace.categories.NativeLifecycle);
                }
                fragmentTransaction.add(this.containerViewId, newFragment, newFragmentTag);
                trace.write("fragmentTransaction.add(" + newFragmentTag + ");", trace.categories.NativeLifecycle);
            }
            else {
                fragmentTransaction.replace(this.containerViewId, newFragment, newFragmentTag);
                trace.write("fragmentTransaction.replace(" + newFragmentTag + ");", trace.categories.NativeLifecycle);
            }
            if (this.backStack.length > 0 && this._currentEntry) {
                var backstackTag = this._currentEntry[BACKSTACK_TAG];
                fragmentTransaction.addToBackStack(backstackTag);
                trace.write("fragmentTransaction.addToBackStack(" + backstackTag + ");", trace.categories.NativeLifecycle);
            }
        }
        if (!isFirstNavigation) {
            ensureAnimationFixed();
            if (this.android.cachePagesOnNavigate && animationFixed < 0) {
                fragmentTransaction.setTransition(android.app.FragmentTransaction.TRANSIT_NONE);
            }
            else {
                var transit = animated ? android.app.FragmentTransaction.TRANSIT_FRAGMENT_OPEN : android.app.FragmentTransaction.TRANSIT_NONE;
                fragmentTransaction.setTransition(transit);
            }
        }
        fragmentTransaction.commit();
        trace.write("fragmentTransaction.commit();", trace.categories.NativeLifecycle);
    };
    Frame.prototype._goBackCore = function (backstackEntry) {
        navDepth = backstackEntry[NAV_DEPTH];
        backstackEntry.isNavigation = true;
        if (this._currentEntry) {
            this._currentEntry[IS_BACK] = true;
            this._currentEntry.isNavigation = true;
        }
        trace.write(this + "._goBackCore(pageId: " + backstackEntry.resolvedPage.id + ", backstackVisible: " + this._isEntryBackstackVisible(backstackEntry) + ", clearHistory: " + backstackEntry.entry.clearHistory + "), navDepth: " + navDepth, trace.categories.Navigation);
        var manager = this._android.activity.getFragmentManager();
        if (manager.getBackStackEntryCount() > 0) {
            manager.popBackStack(backstackEntry[BACKSTACK_TAG], android.app.FragmentManager.POP_BACK_STACK_INCLUSIVE);
        }
    };
    Frame.prototype._createUI = function () {
        var root = new org.nativescript.widgets.ContentLayout(this._context);
        if (this._containerViewId < 0) {
            this._containerViewId = android.view.View.generateViewId();
        }
        this._android.rootViewGroup = root;
        this._android.rootViewGroup.setId(this._containerViewId);
        this._android.rootViewGroup.addOnAttachStateChangeListener(this._listener);
    };
    Frame.prototype.onNativeViewAttachedToWindow = function (view) {
        if (this._delayedNavigationEntry) {
            this._navigateCore(this._delayedNavigationEntry);
            this._delayedNavigationEntry = undefined;
        }
    };
    Frame.prototype.onNativeViewDetachedToWindow = function (view) {
    };
    Frame.prototype._popFromFrameStack = function () {
        if (!this._isInFrameStack) {
            return;
        }
        _super.prototype._popFromFrameStack.call(this);
        if (this._android.hasOwnActivity) {
            this._android.activity.finish();
        }
    };
    Frame.prototype._clearAndroidReference = function () {
        this._android.rootViewGroup.removeOnAttachStateChangeListener(this._listener);
        this._android.rootViewGroup = null;
    };
    Frame.prototype._printNativeBackStack = function () {
        if (!this._android.activity) {
            return;
        }
        var manager = this._android.activity.getFragmentManager();
        var length = manager.getBackStackEntryCount();
        var i = length - 1;
        console.log("---------------------------");
        console.log("Fragment Manager Back Stack (" + length + ")");
        while (i >= 0) {
            var fragment = manager.findFragmentByTag(manager.getBackStackEntryAt(i--).getName());
            console.log("[ " + fragment.getTag() + " ]");
        }
    };
    Frame.prototype._getNavBarVisible = function (page) {
        if (types.isDefined(page.actionBarHidden)) {
            return !page.actionBarHidden;
        }
        if (this._android && types.isDefined(this._android.showActionBar)) {
            return this._android.showActionBar;
        }
        return true;
    };
    Frame.prototype._processNavigationContext = function (navigationContext) {
        var _this = this;
        var activity = this._android.activity;
        if (activity) {
            var isForegroundActivity = activity === application.android.foregroundActivity;
            var isPaused = application.android.paused;
            if (activity && !isForegroundActivity || (isForegroundActivity && isPaused)) {
                var weakActivity_1 = new WeakRef(activity);
                var resume_1 = function (args) {
                    var weakActivityInstance = weakActivity_1.get();
                    var isCurrent = args.activity === weakActivityInstance;
                    if (!weakActivityInstance) {
                        trace.write("Frame _processNavigationContext: Drop For Activity GC-ed", trace.categories.Navigation);
                        unsubscribe_1();
                        return;
                    }
                    if (isCurrent) {
                        trace.write("Frame _processNavigationContext: Activity.Resumed, Continue", trace.categories.Navigation);
                        _super.prototype._processNavigationContext.call(_this, navigationContext);
                        unsubscribe_1();
                    }
                };
                var unsubscribe_1 = function () {
                    trace.write("Frame _processNavigationContext: Unsubscribe from Activity.Resumed", trace.categories.Navigation);
                    application.android.off(application.AndroidApplication.activityResumedEvent, resume_1);
                    application.android.off(application.AndroidApplication.activityStoppedEvent, unsubscribe_1);
                    application.android.off(application.AndroidApplication.activityDestroyedEvent, unsubscribe_1);
                };
                trace.write("Frame._processNavigationContext: Subscribe for Activity.Resumed", trace.categories.Navigation);
                application.android.on(application.AndroidApplication.activityResumedEvent, resume_1);
                application.android.on(application.AndroidApplication.activityStoppedEvent, unsubscribe_1);
                application.android.on(application.AndroidApplication.activityDestroyedEvent, unsubscribe_1);
                return;
            }
        }
        _super.prototype._processNavigationContext.call(this, navigationContext);
    };
    return Frame;
}(frameCommon.Frame));
exports.Frame = Frame;
var framesCounter = 0;
var framesCache = new Array();
var AndroidFrame = (function (_super) {
    __extends(AndroidFrame, _super);
    function AndroidFrame(owner) {
        _super.call(this);
        this.hasOwnActivity = false;
        this._showActionBar = true;
        this._owner = owner;
        this.frameId = framesCounter++;
        framesCache.push(new WeakRef(this));
    }
    Object.defineProperty(AndroidFrame.prototype, "showActionBar", {
        get: function () {
            return this._showActionBar;
        },
        set: function (value) {
            if (this._showActionBar !== value) {
                this._showActionBar = value;
                if (this.owner.currentPage) {
                    this.owner.currentPage.actionBar.update();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AndroidFrame.prototype, "activity", {
        get: function () {
            var activity = this.owner._context;
            if (activity) {
                return activity;
            }
            var currView = this._owner.parent;
            while (currView) {
                if (currView instanceof Frame) {
                    return currView.android.activity;
                }
                currView = currView.parent;
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AndroidFrame.prototype, "actionBar", {
        get: function () {
            var activity = this.currentActivity;
            if (!activity) {
                return undefined;
            }
            var bar = activity.getActionBar();
            if (!bar) {
                return undefined;
            }
            return bar;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AndroidFrame.prototype, "currentActivity", {
        get: function () {
            var activity = this.activity;
            if (activity) {
                return activity;
            }
            var stack = frameCommon.stack(), length = stack.length, i = length - 1, frame;
            for (i; i >= 0; i--) {
                frame = stack[i];
                activity = frame.android.activity;
                if (activity) {
                    return activity;
                }
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AndroidFrame.prototype, "owner", {
        get: function () {
            return this._owner;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AndroidFrame.prototype, "cachePagesOnNavigate", {
        get: function () {
            return this._cachePagesOnNavigate;
        },
        set: function (value) {
            if (this._cachePagesOnNavigate !== value) {
                if (this._owner.backStack.length > 0) {
                    throw new Error("Cannot set cachePagesOnNavigate if there are items in the back stack.");
                }
                this._cachePagesOnNavigate = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    AndroidFrame.prototype.canGoBack = function () {
        if (!this.activity) {
            return false;
        }
        return this.activity.getIntent().getAction() !== android.content.Intent.ACTION_MAIN;
    };
    return AndroidFrame;
}(observable_1.Observable));
function findPageForFragment(fragment, frame) {
    var fragmentTag = fragment.getTag();
    var page;
    var entry;
    trace.write("Finding page for " + fragmentTag + ".", trace.categories.NativeLifecycle);
    if (fragmentTag === pages.DIALOG_FRAGMENT_TAG) {
        trace.write("No need to find page for dialog fragment.", trace.categories.NativeLifecycle);
        return;
    }
    if (frame.currentPage && frame.currentPage[TAG] === fragmentTag) {
        page = frame.currentPage;
        entry = frame._currentEntry;
        trace.write("Current page matches fragment " + fragmentTag + ".", trace.categories.NativeLifecycle);
    }
    else {
        var backStack = frame.backStack;
        for (var i = 0; i < backStack.length; i++) {
            if (backStack[i].resolvedPage[TAG] === fragmentTag) {
                entry = backStack[i];
                break;
            }
        }
        if (entry) {
            page = entry.resolvedPage;
            trace.write("Found " + page + " for " + fragmentTag, trace.categories.NativeLifecycle);
        }
    }
    if (page) {
        fragment.frame = frame;
        fragment.entry = entry;
        page[TAG] = fragmentTag;
    }
    else {
    }
}
function startActivity(activity, frameId) {
    var intent = new android.content.Intent(activity, com.tns.NativeScriptActivity.class);
    intent.setAction(android.content.Intent.ACTION_DEFAULT);
    intent.putExtra(INTENT_EXTRA, frameId);
    activity.startActivity(intent);
}
function getFrameById(frameId) {
    for (var i = 0; i < framesCache.length; i++) {
        var aliveFrame = framesCache[i].get();
        if (aliveFrame && aliveFrame.frameId === frameId) {
            return aliveFrame.owner;
        }
    }
    return null;
}
var animationFixed;
function ensureAnimationFixed() {
    if (!animationFixed) {
        animationFixed = android.os.Build.VERSION.SDK_INT >= 19 ? 1 : -1;
    }
}
var FragmentClass = (function (_super) {
    __extends(FragmentClass, _super);
    function FragmentClass() {
        _super.call(this);
        return global.__native(this);
    }
    FragmentClass.prototype.onHiddenChanged = function (hidden) {
        trace.write(this.getTag() + ".onHiddenChanged(" + hidden + ")", trace.categories.NativeLifecycle);
        _super.prototype.onHiddenChanged.call(this, hidden);
        if (hidden) {
            onFragmentHidden(this, false);
        }
        else {
            onFragmentShown(this);
        }
    };
    FragmentClass.prototype.onCreateAnimator = function (transit, enter, nextAnim) {
        var animator = transitionModule._onFragmentCreateAnimator(this, nextAnim);
        if (!animator) {
            animator = _super.prototype.onCreateAnimator.call(this, transit, enter, nextAnim);
        }
        trace.write(this.getTag() + ".onCreateAnimator(" + transit + ", " + enter + ", " + nextAnim + "): " + animator, trace.categories.NativeLifecycle);
        return animator;
    };
    FragmentClass.prototype.onCreate = function (savedInstanceState) {
        trace.write(this.getTag() + ".onCreate(" + savedInstanceState + ")", trace.categories.NativeLifecycle);
        _super.prototype.onCreate.call(this, savedInstanceState);
        _super.prototype.setHasOptionsMenu.call(this, true);
        if (!this.entry) {
            var frameId = this.getArguments().getInt(FRAMEID);
            var frame = getFrameById(frameId);
            if (frame) {
                this.frame = frame;
            }
            else {
                throw new Error("Cannot find Frame for " + this);
            }
            findPageForFragment(this, this.frame);
        }
    };
    FragmentClass.prototype.onCreateView = function (inflater, container, savedInstanceState) {
        trace.write(this.getTag() + ".onCreateView(inflater, container, " + savedInstanceState + ")", trace.categories.NativeLifecycle);
        var entry = this.entry;
        var page = entry.resolvedPage;
        if (savedInstanceState && savedInstanceState.getBoolean(HIDDEN, false)) {
            this.getFragmentManager().beginTransaction().hide(this).commit();
            page._onAttached(this.getActivity());
        }
        else {
            onFragmentShown(this);
        }
        return page._nativeView;
    };
    FragmentClass.prototype.onSaveInstanceState = function (outState) {
        trace.write(this.getTag() + ".onSaveInstanceState(" + outState + ")", trace.categories.NativeLifecycle);
        _super.prototype.onSaveInstanceState.call(this, outState);
        if (this.isHidden()) {
            outState.putBoolean(HIDDEN, true);
        }
    };
    FragmentClass.prototype.onDestroyView = function () {
        trace.write(this.getTag() + ".onDestroyView()", trace.categories.NativeLifecycle);
        _super.prototype.onDestroyView.call(this);
        onFragmentHidden(this, true);
    };
    FragmentClass.prototype.onDestroy = function () {
        trace.write(this.getTag() + ".onDestroy()", trace.categories.NativeLifecycle);
        _super.prototype.onDestroy.call(this);
        this.entry[FRAGMENT] = undefined;
    };
    FragmentClass = __decorate([
        JavaProxy("com.tns.FragmentClass")
    ], FragmentClass);
    return FragmentClass;
}(android.app.Fragment));
var NativeScriptActivity = (function (_super) {
    __extends(NativeScriptActivity, _super);
    function NativeScriptActivity() {
        _super.call(this);
        return global.__native(this);
    }
    NativeScriptActivity.prototype.onCreate = function (savedInstanceState) {
        trace.write("NativeScriptActivity.onCreate(" + savedInstanceState + ")", trace.categories.NativeLifecycle);
        var app = application.android;
        var intent = this.getIntent();
        if (application.onLaunch) {
            application.onLaunch(intent);
        }
        var args = { eventName: application.launchEvent, object: app, android: intent };
        application.notify(args);
        var frameId = -1;
        var rootView = args.root;
        var extras = intent.getExtras();
        if (extras) {
            frameId = extras.getInt(INTENT_EXTRA, -1);
        }
        else if (savedInstanceState) {
            frameId = savedInstanceState.getInt(INTENT_EXTRA, -1);
        }
        var frame;
        var navParam;
        if (frameId >= 0) {
            rootView = getFrameById(frameId);
        }
        if (!rootView) {
            navParam = application.mainEntry;
            if (!navParam) {
                navParam = application.mainModule;
            }
            if (navParam) {
                frame = new Frame();
            }
            else {
                throw new Error("A Frame must be used to navigate to a Page.");
            }
            rootView = frame;
        }
        var isRestart = !!savedInstanceState && activityInitialized;
        _super.prototype.onCreate.call(this, isRestart ? savedInstanceState : null);
        this.rootView = rootView;
        rootView._onAttached(this);
        this.setContentView(rootView._nativeView, new org.nativescript.widgets.CommonLayoutParams());
        if (frame) {
            frame.navigate(navParam);
        }
        activityInitialized = true;
    };
    NativeScriptActivity.prototype.onSaveInstanceState = function (outState) {
        _super.prototype.onSaveInstanceState.call(this, outState);
        var view = this.rootView;
        if (view instanceof Frame) {
            outState.putInt(INTENT_EXTRA, view.android.frameId);
        }
    };
    NativeScriptActivity.prototype.onStart = function () {
        _super.prototype.onStart.call(this);
        trace.write("NativeScriptActivity.onStart();", trace.categories.NativeLifecycle);
        var rootView = this.rootView;
        if (rootView && !rootView.isLoaded) {
            rootView.onLoaded();
        }
    };
    NativeScriptActivity.prototype.onStop = function () {
        _super.prototype.onStop.call(this);
        trace.write("NativeScriptActivity.onStop();", trace.categories.NativeLifecycle);
        var rootView = this.rootView;
        if (rootView && rootView.isLoaded) {
            rootView.onUnloaded();
        }
    };
    NativeScriptActivity.prototype.onDestroy = function () {
        var rootView = this.rootView;
        if (rootView && rootView._context) {
            rootView._onDetached(true);
        }
        _super.prototype.onDestroy.call(this);
        trace.write("NativeScriptActivity.onDestroy();", trace.categories.NativeLifecycle);
    };
    NativeScriptActivity.prototype.onBackPressed = function () {
        trace.write("NativeScriptActivity.onBackPressed;", trace.categories.NativeLifecycle);
        var args = {
            eventName: "activityBackPressed",
            object: application.android,
            activity: this,
            cancel: false,
        };
        application.android.notify(args);
        if (args.cancel) {
            return;
        }
        if (!frameCommon.goBack()) {
            _super.prototype.onBackPressed.call(this);
        }
    };
    NativeScriptActivity.prototype.onRequestPermissionsResult = function (requestCode, permissions, grantResults) {
        trace.write("NativeScriptActivity.onRequestPermissionsResult;", trace.categories.NativeLifecycle);
        application.android.notify({
            eventName: "activityRequestPermissions",
            object: application.android,
            activity: this,
            requestCode: requestCode,
            permissions: permissions,
            grantResults: grantResults
        });
    };
    NativeScriptActivity.prototype.onActivityResult = function (requestCode, resultCode, data) {
        _super.prototype.onActivityResult.call(this, requestCode, resultCode, data);
        trace.write("NativeScriptActivity.onActivityResult(" + requestCode + ", " + resultCode + ", " + data + ")", trace.categories.NativeLifecycle);
        var result = application.android.onActivityResult;
        if (result) {
            result(requestCode, resultCode, data);
        }
        application.android.notify({
            eventName: "activityResult",
            object: application.android,
            activity: this,
            requestCode: requestCode,
            resultCode: resultCode,
            intent: data
        });
    };
    NativeScriptActivity = __decorate([
        JavaProxy("com.tns.NativeScriptActivity")
    ], NativeScriptActivity);
    return NativeScriptActivity;
}(android.app.Activity));
