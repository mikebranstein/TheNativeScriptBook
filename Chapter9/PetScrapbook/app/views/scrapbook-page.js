var observable = require("data/observable");
var observableArray = require("data/observable-array");
var frame = require("ui/frame");
var fileSystemService = require("~/data/fileSystemService");

function scrapbookPageModel(id){
    var model = new observable.Observable({ id: id });

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
    var scrapbook = new observable.Observable({ pages: new observableArray.ObservableArray() });
    var pages = fileSystemService.fileSystemService.getPages();

    if (pages.length !== 0) {
        pages.forEach(function (item) {
            var model = new scrapbookPageModel();
            
            model.id = item.id;
            model.title = item.title;
            model.gender = item.gender;
            model.year = item.year;
            model.month = item.month;
            model.day = item.day;
            model.image = item.image;
            
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
        context: { model: new scrapbookPageModel(scrapbook.pages.length) }
    });
};

exports.onItemTap = function(args) {
    var page = args.object;
    var scrapbook = page.bindingContext;
    
    frame.topmost().navigate({ 
        moduleName: "views/scrapbookUpdate-page", 
        context: { model: scrapbook.pages.getItem(args.index) }
    });
};