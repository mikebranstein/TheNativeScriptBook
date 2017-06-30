var observableModule = require("data/observable");

var model;   
var closeCallback;
      
exports.onLoaded = function(args) {
    var page = args.object;

    model = new observableModule.fromObject({ 
        date: new Date(Date.now()) 
    });
    page.bindingContext = model;
};

exports.onShownModally = function(args) { 
    closeCallback = args.closeCallback;   
};                                        

exports.onDoneTap = function(args) { closeCallback(model.date); };
