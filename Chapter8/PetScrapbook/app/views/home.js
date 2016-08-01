var observable = require("data/observable");

exports.loaded = function(args) {
    var page = args.object;
    var home = new observable.Observable({
        title: "Pet Scrapbook",
        footer: "Brosteins ©2016"
    });
    
    page.bindingContext = home;
};