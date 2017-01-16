var observable = require("data/observable");
var observableArray = require("data/observable-array");
var frame = require("ui/frame");
var view = require("ui/core/view");
var fileSystemService = require("~/data/fileSystemService");

var camera = require("camera");
var geolocation = require("nativescript-geolocation");

var scrapbook;
var page;
var updateStackLayout;

function scrapbookPageModel(){
    var model = new observable.Observable({ 
        title: null, 
        birthDate: null, 
        gender: null, 
        image: null,
        lat: null,
        long: null,
        isActive: false
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
    updateStackLayout = view.getViewById(page, "updateStackLayout");
    
    var scrapbook = new observable.Observable({
        pages: new observableArray.ObservableArray(),
        selectedPage: null
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
            model.isActive = item.isActive;
            
            scrapbook.pages.push(model);
        });
    }

    page.bindingContext = scrapbook;
};

exports.onAddTap = function(args) {
    var scrapbook = page.bindingContext;
    
    scrapbook.pages.push(new scrapbookPageModel());

    scrapbook.set("selectedPage", scrapbook.pages.getItem(scrapbook.pages.length - 1));
    resetActivePage();
};

function resetActivePage() {
    var scrapbook = page.bindingContext;
    
    scrapbook.pages.forEach(function (item) {
        item.set("isActive", false);
    });
    
    if (scrapbook.selectedPage != null) {
        scrapbook.selectedPage.set("isActive", true);
    }
}

exports.onItemTap = function(args) {
    var scrapbook = page.bindingContext;

    scrapbook.set("selectedPage", scrapbook.pages.getItem(args.index));
    updateStackLayout.bindingContext = scrapbook.selectedPage;

    resetActivePage();
}

exports.onBirthDateTap = function(args) {
    var modalPageModule = "views/selectDate-page";
    var context = { birthDate: updateStackLayout.bindingContext.birthDate };
    var fullscreen = true;

    page.showModal(modalPageModule, context, function closeCallback(birthDate) {
        updateStackLayout.bindingContext.set("birthDate", birthDate);
    }, fullscreen);
};

exports.onGenderTap = function(args) {
    var modalPageModule = "views/selectGender-page";
    var context = { gender: updateStackLayout.bindingContext.gender };
    var fullscreen = true;
    page.showModal(modalPageModule, context, function closeCallback(gender) {
        updateStackLayout.bindingContext.set("gender", gender);
    }, fullscreen);
};

exports.onDoneTap = function(args) {    
    var scrapbook = page.bindingContext;
    
    fileSystemService.fileSystemService.savePage(scrapbook.selectedPage);

    scrapbook.selectedPage.set("isActive", false);
    scrapbook.set("selectedPage", null);
    updateStackLayout.bindingContext = scrapbook.selectedPage;
};

exports.onAddImageTap = function (args) {
    var scrapbookPage = updateStackLayout.bindingContext;

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