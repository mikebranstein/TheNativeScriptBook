var observable = require("data/observable");
var observableArray = require("data/observable-array");
var view = require("ui/core/view");
var fileSystemService = require("~/data/fileSystemService");

exports.onLoaded = function(args) {
  var page = args.object;

  var scrapbook = new observable.fromObject({ 
    pages: new observableArray.ObservableArray(),
    selectedPage: null
    });         
  var pages = fileSystemService.fileSystemService.getPages();   

  if (pages.length !== 0) {                           
    pages.forEach(function (item) {                   
      var model = new scrapbookPageModel();           
       
      model.id = item.id;                             
      model.title = item.title;                       
      model.gender = item.gender;                     
      model.birthDate = item.birthDate;               
      model.image = item.image;                       
      model.lat = item.lat;                           
      model.long = item.long;                         
      
      scrapbook.pages.push(model);                    
    });                                               
  }                                                   
  else {                                              
    scrapbook = new observable.fromObject({           
      pages: new observableArray.ObservableArray(),
      selectedPage: null  
    });                                               
  }                                                   

 page.bindingContext = scrapbook;
    var scrapbookDetail = view.getViewById(page, "scrapbookDetail");
    scrapbookDetail.on("birthDateTap", function() {
        console.log("birth date tap");

        var modalPageModule = "views/selectDate-page";
        var context = { birthDate: scrapbook.selectedPage.birthDate };
        var fullscreen = true;
        page.showModal(modalPageModule, context, function closeCallback(birthDate) {
            scrapbook.selectedPage.set("birthDate", birthDate);
        }, fullscreen);
    });
    scrapbookDetail.on("genderTap", function() {
        console.log("gender tap");

        var modalPageModule = "views/selectGender-page";
        var context = { gender: scrapbook.selectedPage.gender };
        var fullscreen = true;
        page.showModal(modalPageModule, context, function closeCallback(gender) {
            scrapbook.selectedPage.set("gender", gender);
        }, fullscreen);
    });

  page.bindingContext = scrapbook;
};

exports.onAddTap = function(args) {
    var page = args.object;
    var scrapbook = page.bindingContext;
    
    scrapbook.pages.push(new scrapbookPageModel(scrapbook.pages.length));
};

function scrapbookPageModel(id){
    var model = new observable.fromObject({ 
        id: id,
        title: null, 
        birthDate: null, 
        gender: null, 
        image: null,
        lat: null,
        long: null,
        isActive: false
    });

    model.calcAge = function(birthDate){
        var now = Date.now();
        var diff = Math.abs(now - birthDate) / 1000 / 31536000;

        return diff.toFixed(1);
    };

    return model;
}

exports.onItemTap = function(args) {
  var page = args.object;
  var scrapbook = page.bindingContext;

  scrapbook.pages.forEach(function (item) {      
    item.set("isActive", false);                 
  });                                            

  scrapbook.set("selectedPage", scrapbook.pages.getItem(args.index));          
  scrapbook.selectedPage.set("isActive", true);  
}

