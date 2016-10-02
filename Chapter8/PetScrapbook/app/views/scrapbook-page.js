var observable = require("data/observable");
var observableArray = require("data/observable-array");
var frame = require("ui/frame");

// var fileSystem = require("file-system");

var counter = 0;

function scrapbookPageModel(){
    var model = new observable.Observable();

    model.genders = ["Female", "Male", "Other"];
    model.calcAge = function(year, month, day){
            var date = new Date(year, month, day);
            var now = Date.now();
            var diff = Math.abs(now - date) / 1000 / 31536000;

            return diff.toFixed(1);
        };
    
    return model;
}

exports.onLoaded = function(args) {
    var page = args.object;
    //var file = fileSystem.knownFolders.documents().getFile("scrapbook.json").readTextSync();
    //var emptyScrapbookPage = new scrapbookPageModel();
    var scrapbook = new observable.Observable({
        pages: new observableArray.ObservableArray(new scrapbookPageModel())
    });

    // if(file.length !== 0){
    //     var pages = JSON.parse(file);
    //     pages.forEach(function(item){
    //         scrapbook.pages.push(new observable.Observable({
    //             genders: ["Female", "Male", "Other"],
    //             calcAge: function(year, month, day){
    //                 var date = new Date(year, month, day);
    //                 var now = Date.now();
    //                 var diff = Math.abs(now - date) / 1000 / 31536000;

    //                 return diff.toFixed(1);
    //             },
    //             title: item.title,
    //             gender: item.gender,
    //             year: item.year,
    //             month: item.month,
    //             day: item.day
    //         }));
    //     });
    // }

    page.bindingContext = scrapbook;
};

// exports.onTap = function(args) {
//     var page = args.object;
//     var scrapbook = page.bindingContext;
//     var file = fileSystem.knownFolders.documents().getFile("scrapbook.json");
//     var pages = [];
    
//     scrapbook.pages.forEach(function (item) {
//         pages.push({
//             gender: item.gender, 
//             year: item.year, 
//             month: item.month, 
//             day: item.day, 
//             title: item.title
//         });
//     });

//     var json = JSON.stringify(pages);

//     file.writeText(json);
// }

exports.onAddTap = function(args) {
    var page = args.object;
    var scrapbook = page.bindingContext;
    
    scrapbook.pages.push(new scrapbookPageModel());
};

exports.onItemTap = function(args) {
    var page = args.object;
    var scrapbook = page.bindingContext;

    counter++;
    console.log('Item ' + args.index + ' with data ' + scrapbook.pages[args.index] + ' was clicked. Counter: ' + counter);
    
    frame.topmost().navigate({ 
        moduleName: "views/scrapbookUpdate-page", 
        bindingContext: new scrapbookPageModel()
    });
};