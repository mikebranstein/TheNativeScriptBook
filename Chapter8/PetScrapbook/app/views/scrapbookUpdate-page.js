var observable = require("data/observable");
var frame = require("ui/frame");
var index;
var scrapbook;

exports.onLoaded = function(args) {
    var page = args.object;
    index = page.navigationContext.index;
    scrapbook = page.navigationContext.model

    page.bindingContext = scrapbook.pages.getItem(index);
};

exports.onDoneTap = function(args) {    
    var page = args.object;

    frame.topmost().navigate({ 
        moduleName: "views/scrapbook-page", 
        context: { model: scrapbook }
    });
};