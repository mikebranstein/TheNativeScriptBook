var GridLayout = require("ui/layouts/grid-layout").GridLayout;
var StackLayout = require("ui/layouts/stack-layout").StackLayout;
var Label = require("ui/label").Label;
var TextField = require("ui/text-field").TextField;
var Image = require("ui/image").Image;
var imageSourceModule = require("image-source");
var Button = require("ui/button").Button;
var camera = require("nativescript-camera");
var geolocation = require("nativescript-geolocation");
 
var ScrapbookDetail = (function (_super) {
    global.__extends(ScrapbookDetail, _super);

    Object.defineProperty(ScrapbookDetail.prototype, "item", {
        get: function(){
            return this._item;
        },
        set: function(value){
            this._item = value;
            this.updateControl();
        }
    });

    Object.defineProperty(ScrapbookDetail.prototype, "onBirthDateTap", {
        get: function(){
            return this._onBirthDateTap;
        },
        set: function(value){
            this._onBirthDateTap = value;
            this.updateControl();
        }
    });

    Object.defineProperty(ScrapbookDetail.prototype, "onGenderTap", {
        get: function(){
            return this._onGenderTap;
        },
        set: function(value){
            this._onGenderTap = value;
            this.updateControl();
        }
    });

    function ScrapbookDetail() {
        _super.call(this);

        this._item;
        this._onBirthDateTap;
        this._onGenderTap;
        this.rows = "*";
        this.columns = "*";

        this.updateControl = function () {
            // build new control stack
            var rootStackLayout = new StackLayout();

            var formStackLayout = new StackLayout();
            formStackLayout.cssClass = "form";
            formStackLayout.addChild(createTextInputField(this._item, 
                { text: "Name:" }, 
                { sourceProperty: "title" }, 
                true, null, "Enter a name..."));
            formStackLayout.addChild(createTextInputField(this._item, 
                { sourceProperty: "birthDate", expression: "'Birth date: ' + ((birthDate === null || birthDate === undefined || birthDate === '') ? '' : '(' + calcAge(birthDate) + ' years old)')" }, 
                { sourceProperty: "birthDate", expression: "birthDate | dateConverter(dateFormat)" }, 
                false, "birthDateTap", "Enter a birth date..."));
            formStackLayout.addChild(createTextInputField(this._item, 
                { text: "Gender:" }, 
                { sourceProperty: "gender" }, 
                false, "genderTap", "Select a gender..."));
            formStackLayout.addChild(createImageInputField(this._item));
            rootStackLayout.addChild(formStackLayout);

            var button = new Button();
            button.cssClass = "btn btn-primary btn-rounded-sm btn-active";
            button.text = "Add Image";
            button.on("tap", function() { 
                onAddImageTap(this);
            }.bind(button));
            rootStackLayout.addChild(button);

            // remove existing controls
            this.removeChildren();

            // add new ones
            this.addChild(rootStackLayout);
        };

        var onTextFieldTap = function (args, onTapEventName) {
            console.log("text field tapped: " + onTapEventName);

            this.notify({
                eventName: onTapEventName,
                object: this
            });
        }.bind(this);

        var onAddImageTap = function(args) {
            if (!geolocation.isEnabled()) {
                geolocation.enableLocationRequest();
            }

            camera.requestPermissions();
            camera
                .takePicture({ width: 100, height: 100, keepAspectRatio: true, saveToGallery: false })
                .then(function (imageAsset) {
                    this._item.set("image", imageAsset);

                    geolocation
                        .getCurrentLocation()
                        .then(function (location) {
                            this._item.set("lat", location.latitude);
                            this._item.set("long", location.longitude);
                        }.bind(this));
                    }.bind(this));
        }.bind(this);

        var createTextInputField = function (bindingContext, labelText, textFieldText, textEditable, onTapEventName, textHint) {
            var stackLayout = new StackLayout();
            stackLayout.cssClass = "input-field";
            
            var label = new Label();
            label.cssClass = "label";
            if (labelText.text === null || labelText.text === undefined) {
                bindField(label, bindingContext, labelText.sourceProperty, labelText.expression, "text", false);
            } else {
                label.text = labelText.text;
            }
            stackLayout.addChild(label);

            var textField = new TextField();
            textField.cssClass = "input";
            textField.editable = textEditable === null ? true : textEditable;
            if (textHint !== null) {
                textField.hint = textHint;
            }
            if (textFieldText.text === null || textFieldText.text === undefined) {
                bindField(textField, bindingContext, textFieldText.sourceProperty, textFieldText.expression, "text", true);
            } else {
                textField.text = textFieldText.text;
            }
            stackLayout.addChild(textField);

            // wire up tap event of text box
            if (onTapEventName) {
                textField.on("tap", function() { 
                    onTextFieldTap(this, onTapEventName);
                }.bind(textField));
            }

            return stackLayout;
        }.bind(this);

        var createImageInputField = function (bindingContext) {
            var stackLayout = new StackLayout();
            stackLayout.cssClass = "input-field";
            
            var label = new Label();
            label.cssClass = "label";
            label.text = "Image:"
            stackLayout.addChild(label);

            var image = new Image();
            image.stretch = "None";
            bindField(image, bindingContext, "image", null, "src", false);
            stackLayout.addChild(image);

            label = new Label();
            label.cssClass = "footnote";
            label.text = "Image:"
            bindField(label, bindingContext, "(lat, long)", "(lat === undefined || long === undefined || lat === null || long === null) ? '' : 'Picture taken at ' + lat + ', ' + long", "text", false);
            stackLayout.addChild(label);

            return stackLayout;
        }.bind(this);

    }
    return ScrapbookDetail;
 
})(GridLayout);
exports.ScrapbookDetail = ScrapbookDetail;

function bindField(control, bindingContext, bindingSourceProperty, bindingExpression, targetProperty, twoWay) {
    var bindingOptions;
    if (bindingExpression) {
        bindingOptions = {
            sourceProperty: bindingSourceProperty,
            expression: bindingExpression,
            targetProperty: targetProperty,
            twoWay: twoWay
        };
    } else {
        bindingOptions = {
            sourceProperty: bindingSourceProperty,
            targetProperty: targetProperty,
            twoWay: twoWay
        };
    }

    control.bind(bindingOptions, bindingContext);
}


