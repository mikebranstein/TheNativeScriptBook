var observable = require("data/observable");
var frame = require("ui/frame");
var fileSystemService = require("~/data/fileSystemService");


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