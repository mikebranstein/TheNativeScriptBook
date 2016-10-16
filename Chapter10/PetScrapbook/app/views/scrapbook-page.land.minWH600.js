var observable = require("data/observable");
var observableArray = require("data/observable-array");
var frame = require("ui/frame");
var view = require("ui/core/view");

var scrapbook;

function scrapbookPageModel(){
    var model = new observable.Observable({ title: "null", birthDate: null, gender: null});

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

    page.bindingContext = scrapbook;

    var scrapbookList = view.getViewById(page, "scrapbookList");
    scrapbookList.on("itemTap", onItemTap);
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