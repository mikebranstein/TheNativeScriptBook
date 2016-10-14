var observable = require("data/observable");
var frame = require("ui/frame");
var fileSystemService = require("~/data/fileSystemService");
var camera = require("camera");

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

    camera.takePicture({width: 100, height: 100, keepAspectRatio: true}).then(function (picture) {
        scrapbookPage.set("image", picture);
    });
}