var observable = require("data/observable");
var observableArray = require("data/observable-array");
var frame = require("ui/frame");
var view = require("ui/core/view");
var fileSystemService = require("~/data/fileSystemService");

var scrapbook;

function scrapbookPageModel(){
    var model = new observable.Observable({ 
        title: "null", 
        birthDate: null, 
        gender: null, 
        image: null,
        lat: null,
        long: null
    });

    model.calcAge = function(birthDate){
        var now = Date.now();
        var diff = Math.abs(now - birthDate) / 1000 / 31536000;

        return diff.toFixed(1);
    };
    
    return model;
}

exports.onLoaded = function(args) {
    var page = args.object;
    var scrapbook = new observable.Observable({
        pages: new observableArray.ObservableArray(),
        selectedPage: null
    });

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

    page.bindingContext = scrapbook;
};

exports.onAddTap = function(args) {
    var page = args.object;
    var scrapbook = page.bindingContext;
    
    scrapbook.pages.push(new scrapbookPageModel());
};

function onItemTap (args) {
    var page = args.object;
    var scrapbook = page.bindingContext;
    scrapbook.set("selectedPage", scrapbook.pages.getItem(args.index));
    console.log(JSON.stringify(scrapbook.selectedPage));
}

exports.test = function (args) {
    console.log("testing...");
};