var observable = require("data/observable");
var frame = require("ui/frame");

exports.onLoaded = function(args) {
    var page = args.object;
    var home = new observable.fromObject({
        title: "Pet Scrapbook",
        footer: "Brosteins ©2016"
    });
    
    page.bindingContext = home;
};

exports.onContinueTap = function(args){
    frame.topmost().navigate("views/scrapbook-page");
}