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
    //page.bindingContext = page.navigationContext.data;

    console.log(model.pages.getItem(index).title);
    console.log(page.bindingContext.title);

    frame.topmost().navigate({ 
        moduleName: "views/scrapbook-page", 
        //context: { model: page.navigationContext }
        context: { model: model }
    });
};