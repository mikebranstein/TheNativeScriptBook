var observable = require("data/observable");
var observableArray = require("data/observable-array");
var frame = require("ui/frame");
var view = require("ui/core/view");

function scrapbookPageModel(){
    var model = new observable.Observable();

    model.calcAge = function(birthDate){
        var now = Date.now();
        var diff = Math.abs(now - birthDate) / 1000 / 31536000;

        return diff.toFixed(1);
    };
    model.birthDate = null;
    model.gender = null;
    
    return model;
}

exports.onLoaded = function(args) {
    var page = args.object;
    var scrapbook;

    if(page.navigationContext != null) {
        scrapbook = page.navigationContext.model;
    }
    else {
        scrapbook = new observable.Observable({
            pages: new observableArray.ObservableArray()
        });
    } 

    page.bindingContext = scrapbook;

    var scrapbookList = view.getViewById(page, "scrapbookList");
    scrapbookList.on("itemTap", onItemTap);
};

exports.onAddTap = function(args) {
    var page = args.object;
    var scrapbook = page.bindingContext;
    
    scrapbook.pages.push(new scrapbookPageModel());

    frame.topmost().navigate({ 
        moduleName: "views/scrapbookUpdate-page", 
        context: { model: scrapbook, index: scrapbook.pages.length - 1 },
        clearHistory: true
    });
};

function onItemTap (args) {
    var page = args.object;
    var scrapbook = page.bindingContext;
    
    frame.topmost().navigate({ 
        moduleName: "views/scrapbookUpdate-page", 
        context: { model: scrapbook, index: args.index },
        clearHistory: true
    });
}