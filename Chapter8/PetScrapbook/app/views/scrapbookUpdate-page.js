var observable = require("data/observable");
var frame = require("ui/frame");
var index;
var model;

exports.onLoaded = function(args) {
    var page = args.object;
    index = page.navigationContext.index;
    model = page.navigationContext.model

    page.bindingContext = model.pages.getItem(index);
};

exports.onDoneTap = function(args) {    
    var page = args.object;
    
    frame.topmost().navigate({ 
        moduleName: "views/scrapbook-page", 
        context: { model: model }
    });
};