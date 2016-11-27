var observable = require("data/observable");
var observableArray = require("data/observable-array");
var frame = require("ui/frame");
var view = require("ui/core/view");

var scrapbook;

function scrapbookPageModel(){
    var model = new observable.Observable({ 
        title: null, 
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

    page.bindingContext = scrapbook;

    var scrapbookList = view.getViewById(page, "scrapbookList");
    scrapbookList.on("itemTap", onItemTap);

    var scrapbookDetail = view.getViewById(page, "scrapbookDetail");
    scrapbookDetail.on("birthDateTap", function() {
        console.log("birth date tap");

        var modalPageModule = "views/selectDate-page";
        var context = { birthDate: scrapbook.selectedPage.birthDate };
        var fullscreen = true;
        page.showModal(modalPageModule, context, function closeCallback(birthDate) {
            scrapbook.selectedPage.set("birthDate", birthDate);
        }, fullscreen);
    });
    scrapbookDetail.on("genderTap", function() {
        console.log("gender tap");

        var modalPageModule = "views/selectGender-page";
        var context = { gender: scrapbook.selectedPage.gender };
        var fullscreen = true;
        page.showModal(modalPageModule, context, function closeCallback(gender) {
            scrapbook.selectedPage.set("gender", gender);
        }, fullscreen);
    });
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