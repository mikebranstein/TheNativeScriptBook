var observable = require("data/observable");
var observableArray = require("data/observable-array");
var frame = require("ui/frame");
var view = require("ui/core/view");
var fileSystemService = require("~/data/fileSystemService");

function scrapbookPageModel(id){
    var model = new observable.Observable({ id: id});

    model.calcAge = function(birthDate){
        var now = Date.now();
        var diff = Math.abs(now - birthDate) / 1000 / 31536000;

        return diff.toFixed(1);
    };
    model.birthDate = null;
    model.gender = null;
    
    return model;
}

exports.onLoaded = function(args) {
    var page = args.object;
    var scrapbook = new observable.Observable({ pages: new observableArray.ObservableArray() });
    var pages = fileSystemService.fileSystemService.getPages();

    if (pages.length !== 0) {
        pages.forEach(function (item) {
            var model = new scrapbookPageModel();
            
            model.id = item.id;
            model.title = item.title;
            model.gender = item.gender;
            model.birthDate = item.birthDate;
            model.image = item.image;
            model.lat = item.lat;
            model.long = item.long;
            
            scrapbook.pages.push(model);
        });
    }
    else {
        scrapbook = new observable.Observable({
            pages: new observableArray.ObservableArray()
        });
    } 

    page.bindingContext = scrapbook;
};

exports.onAddTap = function(args) {
    var page = args.object;
    var scrapbook = page.bindingContext;
    
    frame.topmost().navigate({ 
        moduleName: "views/scrapbookUpdate-page", 
        context: { model: new scrapbookPageModel(scrapbook.pages.length) },
        clearHistory: true
    });
};

exports.onItemTap = function(args) {
    var page = args.object;
    var scrapbook = page.bindingContext;
    
    frame.topmost().navigate({ 
        moduleName: "views/scrapbookUpdate-page", 
        context: { model: scrapbook.pages.getItem(args.index) },
        clearHistory: true
    });
}