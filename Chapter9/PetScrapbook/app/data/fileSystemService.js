var fileSystem = require("file-system");

var fileSystemService = function () {
    this.file = fileSystem.knownFolders.documents().getFile("scrapbook.json");
};

fileSystemService.prototype.getPages = function () {
    var pages = [];

    if (this.file.readTextSync().length !== 0) {
        pages = JSON.parse(this.file.readTextSync());
    }
    
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
    this.file.writeText(json);    
};

exports.fileSystemService = new fileSystemService();