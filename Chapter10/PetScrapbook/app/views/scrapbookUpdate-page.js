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
    var fullscreen = true;
    page.showModal(modalPageModule, context, function closeCallback(birthDate) {
        page.bindingContext.set("birthDate", birthDate);
    }, fullscreen);
};

exports.onGenderTap = function(args) {
    var modalPageModule = "views/selectGender-page";
    var context = { gender: page.bindingContext.gender };
    var fullscreen = true;
    page.showModal(modalPageModule, context, function closeCallback(gender) {
        page.bindingContext.set("gender", gender);
    }, fullscreen);
};
