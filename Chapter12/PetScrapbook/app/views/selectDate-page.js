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
        date: new Date(Date.now()) 
    });
    page.bindingContext = model;
};

exports.onDoneTap = function(args) {    
    closeCallback(model.date);
};