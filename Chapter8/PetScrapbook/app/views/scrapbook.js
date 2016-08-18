var observable = require("data/observable");
var observableArray = require("data/observable-array");

exports.onLoaded = function(args) {
    var page = args.object;
    var emptyScrapbookPage = new observable.Observable({
        genders: ["Female", "Male", "Other"]
    });
    var filledScrapbookPage = new observable.Observable({
        genders: ["Female", "Male", "Other"],
        title: "Riven's Page",
        gender: 0
    });
    var scrapbook = new observable.Observable({
        pages: new observableArray.ObservableArray(emptyScrapbookPage, filledScrapbookPage)
    });

    page.bindingContext = scrapbook;
};

exports.onTap = function(args) {
    // var page = args.object;
    // var scrapbook = page.bindingContext;
    // var date = new Date(scrapbook.year, scrapbook.month, scrapbook.day);
    
    // console.log("You have made " + scrapbook.title);
    // console.log("Age: " + date.toLocaleDateString());
    // console.log("Gender selected:" + scrapbook.gender);
}