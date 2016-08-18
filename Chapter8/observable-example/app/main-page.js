var observableModule = require("data/observable");
var view = require ("ui/core/view");

exports.onLoaded = function(args){
    var page = args.object;
    var pet = new observableModule.Observable();
    var label = view.getViewById(page, "title");

    var bindingOptions = {
        sourceProperty: "Name",
        targetProperty: "text"
    };

    label.bind(bindingOptions, pet);

    pet.set("Name", "Riven");
    pet.set("Type", "Dog");
    pet.set("Age", 3);

    pet.on("propertyChange", function(eventData){
        var changedPet = eventData.object;

        console.log("Your pet is a " + changedPet.Type + " named " + changedPet.Name + " and is " + changedPet.get("Age") + " years old.");
    });

    pet.set("Age", 4);
}