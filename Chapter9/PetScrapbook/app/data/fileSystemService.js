var fileSystem = require("file-system");
var imageModule = require("image-source");

var fileSystemService = function () {
    this.file = fileSystem.knownFolders.documents().getFile("scrapbook.json");
};

fileSystemService.prototype.getPages = function () {
    var pages = [];

    if (this.file.readTextSync().length !== 0) {
        pages = JSON.parse(this.file.readTextSync());
    }

    pages.forEach(function (page) {
        if (page.imageBase64 != null) {
            page.image = imageModule.fromBase64(page.imageBase64);
        }   
    });
    
    return pages;
}

fileSystemService.prototype.savePage = function (scrapbookPage) {
    var pages = this.getPages();

    var index = pages.findIndex(function (element) {
        return element.id === scrapbookPage.id;
    });

    if (index !== -1) {
        pages[index] = {
            id: scrapbookPage.id,
            title: scrapbookPage.title,
            gender: scrapbookPage.gender,
            year: scrapbookPage.year,
            month: scrapbookPage.month,
            day: scrapbookPage.day,
            imageBase64: scrapbookPage.image != null ? scrapbookPage.image.toBase64String("png") : null
        };
    }
    else {
        pages.push({
            id: scrapbookPage.id,
            title: scrapbookPage.title,
            gender: scrapbookPage.gender,
            year: scrapbookPage.year,
            month: scrapbookPage.month,
            day: scrapbookPage.day,
            imageBase64: scrapbookPage.image != null ? scrapbookPage.image.toBase64String("png") : null
        });
    }

    var json = JSON.stringify(pages);
    this.file.writeText(json);    
};

exports.fileSystemService = new fileSystemService();