var observable = require("data/observable");
var frame = require("ui/frame");
var fileSystem = require("file-system");

exports.onLoaded = function(args) {
    var page = args.object;
    var scrapbookPage = page.navigationContext.model;

    page.bindingContext = scrapbookPage;
};

exports.onDoneTap = function(args) {    
    var page = args.object;
    var scrapbookPage = page.bindingContext;
    var file = fileSystem.knownFolders.documents().getFile("scrapbook.json");
    var pages = [];

    if (file.readTextSync().length !== 0) {
        pages = JSON.parse(file.readTextSync());
    }

    var index = pages.findIndex(function (element) {
        return element.id === scrapbookPage.id;
    });

    console.log('found the index of: ' + index);
    
    if (index !== -1) {
        pages[index] = {
            id: scrapbookPage.id,
            title: scrapbookPage.title,
            gender: scrapbookPage.gender,
            year: scrapbookPage.year,
            month: scrapbookPage.month,
            day: scrapbookPage.day
        };
    }
    else {
        pages.push({
            id: scrapbookPage.id,
            title: scrapbookPage.title,
            gender: scrapbookPage.gender,
            year: scrapbookPage.year,
            month: scrapbookPage.month,
            day: scrapbookPage.day
        });
    }

    var json = JSON.stringify(pages);
    file.writeText(json);

    frame.topmost().navigate({ 
        moduleName: "views/scrapbook-page"
    });
};