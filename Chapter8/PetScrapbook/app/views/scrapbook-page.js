var observable = require("data/observable");
var observableArray = require("data/observable-array");
var frame = require("ui/frame");

function scrapbookPageModel(){
    var model = new observable.Observable();

    model.genders = ["Female", "Male", "Other"];
    model.calcAge = function(year, month, day){
            var date = new Date(year, month, day);
            var now = Date.now();
            var diff = Math.abs(now - date) / 1000 / 31536000;

            return diff.toFixed(1);
        };
    
    return model;
}

exports.onLoaded = function(args) {
    var page = args.object;
    var scrapbook;

    if(page.navigationContext != null) {
        scrapbook = page.navigationContext.model;
    }
    else {
        scrapbook = new observable.Observable({
            pages: new observableArray.ObservableArray(new scrapbookPageModel())
        });
    } 

    page.bindingContext = scrapbook;
};

exports.onAddTap = function(args) {
    var page = args.object;
    var scrapbook = page.bindingContext;
    
    scrapbook.pages.push(new scrapbookPageModel());

    frame.topmost().navigate({ 
        moduleName: "views/scrapbookUpdate-page", 
        context: { model: scrapbook, index: scrapbook.pages.length - 1 }
    });
};

exports.onItemTap = function(args) {
    var page = args.object;
    var scrapbook = page.bindingContext;
    
    frame.topmost().navigate({ 
        moduleName: "views/scrapbookUpdate-page", 
        context: { model: scrapbook, index: args.index }
    });
};