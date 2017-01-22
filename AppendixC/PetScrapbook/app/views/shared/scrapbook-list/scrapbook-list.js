var GridLayout = require("ui/layouts/grid-layout").GridLayout;
var Label = require("ui/label").Label;
var ListView = require("ui/list-view").ListView;
 
var ScrapbookList = (function (_super) {
    global.__extends(ScrapbookList, _super);

    Object.defineProperty(ScrapbookList.prototype, "items", {
        get: function(){
            return this._items;
        },
        set: function(value){
            this._items = value;
            this.bindData();
        }
    });

    function ScrapbookList() {
        _super.call(this);

        this._items;
        this._itemTap;

        this.rows = "*";
        this.columns = "*";

        var listView = new ListView();
        listView.cssClass = "list-group";
        listView.itemTemplate = '<StackLayout class="list-group-item"><Label class="m-x-auto" text="{{ title, (title === null || title === undefined ? \'New\' : title) + \' Scrapbook Page\' }}" /></StackLayout>';
        listView.on(ListView.itemTapEvent, function(args) {
            onItemTap(this, args.index);
        }.bind(listView)); 

        this.addChild(listView);

        this.bindData = function () {
            var bindingOptions = {
                sourceProperty: "$value",
                targetProperty: "items",
                twoWay: "true"
            };
            listView.bind(bindingOptions, this._items);
        };

        var onItemTap = function(args, index) {
            this.notify({
                eventName: "itemTap",
                object: this,
                index: index
            });
        }.bind(this);
    }
    return ScrapbookList;
 
})(GridLayout);
 
exports.ScrapbookList = ScrapbookList;