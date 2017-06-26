var frame = require("ui/frame");
var observableModule = require("data/observable");

var model;
var closeCallback;

exports.onShownModally = function(args) {
    closeCallback = args.closeCallback;
}

exports.onLoaded = function(args) {
    var page = args.object;

    model = new observableModule.Observable({ 
        genders: ["Female", "Male", "Other"],
        gender: 0 
    });
    page.bindingContext = model;
};

exports.onDoneTap = function(args) {    
    closeCallback(model.genders[model.gender]);
};