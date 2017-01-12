var observable = require("data/observable");
var observableArray = require("data/observable-array");
var frame = require("ui/frame");
var view = require("ui/core/view");
var fileSystemService = require("~/data/fileSystemService");

var camera = require("camera");
var geolocation = require("nativescript-geolocation");

var scrapbook;
var page;

function scrapbookPageModel(){
    var model = new observable.Observable({ 
        title: null, 
        birthDate: null, 
        gender: null, 
        image: null,
        lat: null,
        long: null
    });

    model.calcAge = function(birthDate){
        var now = Date.now();
        var diff = Math.abs(now - birthDate) / 1000 / 31536000;

        return diff.toFixed(1);
    };
    
    return model;
}

exports.onLoaded = function(args) {
    page = args.object;
    
    var scrapbook = new observable.Observable({
        pages: new observableArray.ObservableArray(),
        selectedPage: null,
        calcAge: function(birthDate){
            var now = Date.now();
            var diff = Math.abs(now - birthDate) / 1000 / 31536000;

            return diff.toFixed(1);
        }
    });

    var pages = fileSystemService.fileSystemService.getPages();

    if (pages.length !== 0) {
        pages.forEach(function (item) {
            var model = new scrapbookPageModel();
            
            model.id = item.id;
            model.title = item.title;
            model.gender = item.gender;
            model.birthDate = item.birthDate;
            model.image = item.image;
            model.lat = item.lat;
            model.long = item.long;
            
            scrapbook.pages.push(model);
        });
    }

    page.bindingContext = scrapbook;
    var stackLayout = view.getViewById(page, "temp");
    stackLayout.bindingContext = scrapbook.selectedPage;
    console.log("done");
};

exports.onAddTap = function(args) {
    var page = args.object;
    var scrapbook = page.bindingContext;
    
    scrapbook.pages.push(new scrapbookPageModel());
};

exports.onItemTap = function(args) {
    var scrapbook = page.bindingContext;

    scrapbook.pages.forEach(function (item) {
        item.set("isActive", false);
    });

    scrapbook.set("selectedPage", scrapbook.pages.getItem(args.index));
    scrapbook.selectedPage.set("isActive", true);
    console.log(JSON.stringify(scrapbook.selectedPage));
}

exports.onBirthDateTap = function(args) {
    var modalPageModule = "views/selectDate-page";
    var context = { birthDate: page.bindingContext.birthDate };
    var fullscreen = true;

    page.showModal(modalPageModule, context, function closeCallback(birthDate) {
        page.bindingContext.selectedPage.set("birthDate", birthDate);
    }, fullscreen);
};

exports.onGenderTap = function(args) {
    var modalPageModule = "views/selectGender-page";
    var context = { gender: page.bindingContext.gender };
    var fullscreen = true;
    page.showModal(modalPageModule, context, function closeCallback(gender) {
        page.bindingContext.selectedPage.set("gender", gender);
    }, fullscreen);
};

exports.onDoneTap = function(args) {    
    var scrapbookPage = page.bindingContext;
    
    fileSystemService.fileSystemService.savePage(scrapbookPage);

    frame.topmost().navigate({ 
        moduleName: "views/scrapbook-page",
        clearHistory: true,
        transition: {
            name: "slideRight"
        }
    });
};

exports.onAddImageTap = function (args) {
    var scrapbookPage = page.bindingContext;

    if (!geolocation.isEnabled()) {
        geolocation.enableLocationRequest();
    }

    camera
        .takePicture({ width: 100, height: 100, keepAspectRatio: true })
        .then(function (picture) {
            scrapbookPage.set("image", picture);

            geolocation
                .getCurrentLocation()
                .then(function (location) {
                    scrapbookPage.set("lat", location.latitude);
                    scrapbookPage.set("long", location.longitude);
                });
        });
};