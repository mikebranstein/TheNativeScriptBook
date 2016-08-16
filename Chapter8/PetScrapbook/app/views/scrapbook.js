var observable = require("data/observable");

exports.onLoaded = function(args) {
    var page = args.object;
    var scrapbook = new observable.Observable({
        genders: ["Female", "Male", "Other"]
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