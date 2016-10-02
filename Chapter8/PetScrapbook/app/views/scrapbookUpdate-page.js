var observable = require("data/observable");
var frame = require("ui/frame");

exports.onLoaded = function(args) {
    var page = args.object;
    console.log(page);
    console.log(page.bindingContext);
    console.log(page.navigationContext);
    var scrapbookPage = page.navigationContext;
    page.bindingContext = scrapbookPage;

    console.log(scrapbookPage);
}

exports.onDoneTap = function(args) {    
    frame.topmost().navigate("views/scrapbook-page");
};