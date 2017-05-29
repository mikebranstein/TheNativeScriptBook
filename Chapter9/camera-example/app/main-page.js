var camera = require("nativescript-camera");
var imageModule = require("ui/image");

var myImage;

exports.onLoaded = function (args) {
    var page = args.object;
    myImage = page.getViewById("myImage");
}

exports.onTap = function () {
    camera.takePicture().then(function(picture) {
        console.log("Result is an image source instance");
        
        var image = new imageModule.Image();
        image.imageSource = picture;

        myImage.imageSource = picture;
    });
}