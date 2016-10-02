var observable = require("data/observable");
var frame = require("ui/frame");

exports.onLoaded = function(args) {
    var page = args.object;
    page.bindingContext = page.navigationContext.data;
};

exports.onDoneTap = function(args) {    
    frame.topmost().navigate("views/scrapbook-page");
};