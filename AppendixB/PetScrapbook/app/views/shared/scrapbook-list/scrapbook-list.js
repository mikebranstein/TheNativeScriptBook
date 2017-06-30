var GridLayout = require("ui/layouts/grid-layout").GridLayout; 
var ListView = require("ui/list-view").ListView;
var StackLayout = require("ui/layouts/stack-layout").StackLayout;
var Image = require("ui/image").Image;
var Label = require("ui/label").Label;
 
var ScrapbookList = (function (_super) {      
    global.__extends(ScrapbookList, _super);  

    Object.defineProperty(ScrapbookList.prototype, "items", { 
        get: function() {        
            return this._items;   
        },                      
        set: function(value) {   
            this._items = value;  
            this.bindData();      
        }                       
    });

  function ScrapbookList() { 
    _super.call(this);     

    this._items; 

    this.rows = "*";       
    this.columns = "*";    

    var listView = new ListView();                       
    listView.className = "list-group";

    listView.itemTemplate = function() {                 
      var stackLayout = new StackLayout();
      stackLayout.orientation = "horizontal";
      stackLayout.bind({                                 
        targetProperty: "className",                     
        sourceProperty: "$value",                        
        expression: "isActive ? 'list-group-item active' : 'list-group-item'"  
      });

      var image = new Image();
      image.className = "thumb img-circle";
      image.bind({                                       
        targetProperty: "src",                           
        sourceProperty: "image"                          
      });                                                
      stackLayout.addChild(image);

      var label = new Label();
      label.className = "list-group-item-text";
      label.style.width = "100%";
      label.textWrap = true;

      label.bind({                                            
        targetProperty: "text",                               
        sourceProperty: "title",                               
        expression: "(title === null || title === undefined ? 'New' : title + '\\\'s') + ' Scrapbook Page'"       
      });                                                     
      stackLayout.addChild(label);

      return stackLayout;
    };

    listView.on(ListView.itemTapEvent, function(args) { 
        onItemTap(this, args.index);                      
    }.bind(listView));                                  

    this.addChild(listView); 

    this.bindData = function () {
        listView.bind({             
            sourceProperty: "$value",
            targetProperty: "items",
            twoWay: "true"
        }, this._items);
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
ScrapbookList.itemTapEvent = "itemTap"; 

exports.ScrapbookList = ScrapbookList;