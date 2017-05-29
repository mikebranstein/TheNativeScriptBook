var observable = require("data/observable");

exports.onLoaded = function(args){
    var page = args.object;
    var listItems = new observable.Observable();

    listItems.items = ["Item 1", "Item 2", "Item 3"];

    page.bindingContext = listItems;
}