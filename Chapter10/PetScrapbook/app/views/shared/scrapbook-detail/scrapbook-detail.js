var GridLayout = require("ui/layouts/grid-layout").GridLayout;
var StackLayout = require("ui/layouts/stack-layout").StackLayout;
var Label = require("ui/label").Label;
var TextField = require("ui/text-field").TextField;
 
var ScrapbookDetail = (function (_super) {
    global.__extends(ScrapbookDetail, _super);

    Object.defineProperty(ScrapbookDetail.prototype, "item", {
        get: function(){
            return this._item;
        },
        set: function(value){
            this._item = value;
            this.bindData();
        }
    });

    function ScrapbookDetail() {
        _super.call(this);

        this._item;

        this.rows = "*";
        this.columns = "*";

        var rootStackLayout = new StackLayout();
        rootStackLayout.cssClass = "form";
        var l = new TextField();
        rootStackLayout.addChild(l);
        rootStackLayout.addChild(createTextInputField(this._item, "Name:", "{{ title }}", true, null, "Enter a name..."));
        rootStackLayout.addChild(createTextInputField(this._item, "{{ birthDate, 'Birth date: ' + ((birthDate === null || birthDate === undefined || birthDate === '') ? '' : '(' + calcAge(birthDate) + ' years old)') }}", "{{ birthDate, birthDate | dateConverter(dateFormat) }}", false, null, "Enter a birth date..."));
        rootStackLayout.addChild(createTextInputField(this._item, "Gender:", "{{ gender }}", false, null, "Select a gender..."));
        this.addChild(rootStackLayout);

        // todo: need to call bind data after the observable on this object is set...and for all controls
        this.bindData = function () {
             var bindingOptions = {
                sourceProperty: "title",
                targetProperty: "text",
                twoWay: true
            };
            l.bind(bindingOptions, this._item);
        };

    }
    return ScrapbookDetail;
 
})(GridLayout);
exports.ScrapbookDetail = ScrapbookDetail;

function createTextInputField(bindingContext, labelText, textText, textEditable, textOnTap, textHint) {
    var stackLayout = new StackLayout();
    stackLayout.cssClass = "input-field";
    
    var label = new Label();
    label.cssClass = "label";
    if (labelText.indexOf("{{") === 0) {
        bindField(label, bindingContext, labelText, "text", false);
    } else {
        label.text = labelText;
    }
    stackLayout.addChild(label);

    var textField = new TextField();
    textField.cssClass = "input";
    textField.editable = textEditable === null ? true : textEditable;
    if (textHint !== null) {
        textField.hint = textHint;
    }
    if (textText.indexOf("{{") === 0) {
        bindField(textField, bindingContext, textText, "text", true);
    } else {
        textField.text = textText;
    }
    stackLayout.addChild(textField);

    return stackLayout;
}

function bindField(control, bindingContext, bindingText, targetProperty, twoWay) {
    var cleanedBindingText = bindingText.replace("{{", "").replace("}}", "").trim();
    var commaIndex = cleanedBindingText.indexOf(",");
    var hasBindingExpression = commaIndex !== -1;

    var bindingOptions;
    if (hasBindingExpression) {
        bindingOptions = {
            sourceProperty: cleanedBindingText.substring(0, commaIndex),
            expression: cleanedBindingText.substring(commaIndex + 1),
            targetProperty: targetProperty,
            twoWay: twoWay
        };
    } else {
        bindingOptions = {
            sourceProperty: cleanedBindingText,
            targetProperty: targetProperty,
            twoWay: twoWay
        };
    }

    control.bind(bindingOptions, bindingContext);
}


