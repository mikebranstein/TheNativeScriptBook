var observable = require("data/observable");
var frame = require("ui/frame");
var fileSystemService = require("~/data/fileSystemService");
var camera = require("nativescript-camera");
var geolocation = require("nativescript-geolocation");
var image = require("image-source");

exports.onLoaded = function(args) {
    var page = args.object;
    var scrapbookPage = page.navigationContext.model;

    page.bindingContext = scrapbookPage;
};

exports.onDoneTap = function(args) {    
    var page = args.object;
    var scrapbookPage = page.bindingContext;
    
    fileSystemService.fileSystemService.savePage(scrapbookPage);

    frame.topmost().navigate({ 
        moduleName: "views/scrapbook-page"
    });
};

exports.onAddImageTap = function (args) {
    var page = args.object;
    var scrapbookPage = page.bindingContext;

    if (!geolocation.isEnabled()) {
        geolocation.enableLocationRequest();
    }

    camera.requestPermissions();
    camera.takePicture({ width: 100, height: 100, keepAspectRatio: true }).then(function (picture) {
        image.fromAsset(picture).then(function (imageSource) {
            scrapbookPage.set("image", imageSource);    
        });

        geolocation.getCurrentLocation().then(function (location) {
            scrapbookPage.set("lat", location.latitude);
            scrapbookPage.set("long", location.longitude);
        });
    });
};