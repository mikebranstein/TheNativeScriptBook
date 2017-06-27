var observable = require("data/observable");
var frame = require("ui/frame");
var fileSystemService = require("~/data/fileSystemService");
var camera = require("nativescript-camera");
var geolocation = require("nativescript-geolocation");
var image = require("image-source");

var page;

exports.onLoaded = function(args) {
    page = args.object;
    var scrapbookPage = page.navigationContext.model;

    page.bindingContext = scrapbookPage;
};
exports.onDoneTap = function(args) {    
    var page = args.object;
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

exports.onBirthDateTap = function(args) {
  var modalPageModule = "views/selectDate-page";
  var context = { birthDate: page.bindingContext.birthDate };
  var fullscreen = true;
  
  page.showModal(
    modalPageModule, 
    context, 
    function closeCallback(birthDate) {                
      page.bindingContext.set("birthDate", birthDate); 
    },                                                 
    fullscreen
  );
};

exports.onGenderTap = function(args) {
    var modalPageModule = "views/selectGender-page";
    var context = { gender: page.bindingContext.gender };
    var fullscreen = true;
    page.showModal(modalPageModule, context, function closeCallback(gender) {
        page.bindingContext.set("gender", gender);
    }, fullscreen);
};