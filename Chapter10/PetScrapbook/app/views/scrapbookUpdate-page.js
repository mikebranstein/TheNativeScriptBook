var observable = require("data/observable");
var frame = require("ui/frame");
var scrapbook;
var page;

exports.onLoaded = function(args) {
    page = args.object;
    var index = page.navigationContext.index;
    scrapbook = page.navigationContext.model

    page.bindingContext = scrapbook.pages.getItem(index);
};

exports.onBirthDateTap = function(args) {
    var modalPageModule = "views/selectDate-page";
    var context = { birthDate: page.bindingContext.birthDate };
    console.log(JSON.stringify(context));
    var fullscreen = true;
    page.showModal(modalPageModule, context, function closeCallback(birthDate) {
        console.log(birthDate);
        page.bindingContext.set("birthDate", birthDate);
    }, fullscreen);
};

