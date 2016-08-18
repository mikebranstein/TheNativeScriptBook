var observable = require("data/observable");
var observableArray = require("data/observable-array");

exports.onLoaded = function(args) {
    var page = args.object;
    var calcAge = function(year, month, day){
            var date = new Date(year, month, day);
            var now = Date.now();
            var diff = Math.abs(now - date) / 1000 / 31536000;

            return diff.toFixed(1);
    }
    var genders = ["Female", "Male", "Other"];
    var emptyScrapbookPage = new observable.Observable({
        genders: genders,
        calcAge: calcAge
    });
    var filledScrapbookPage = new observable.Observable({
        genders: genders,
        title: "Riven's Page",
        calcAge: calcAge,
        gender: 0
    });
    var scrapbook = new observable.Observable({
        pages: new observableArray.ObservableArray(emptyScrapbookPage, filledScrapbookPage)
    });

    page.bindingContext = scrapbook;
};

exports.onTap = function(args) {
    var page = args.object;
    var scrapbook = page.bindingContext;
    var date = new Date(scrapbook.year, scrapbook.month, scrapbook.day);
    
    console.log("You have made " + scrapbook.title);
    console.log("Age: " + date.toLocaleDateString());
    console.log("Gender selected:" + scrapbook.gender);
}