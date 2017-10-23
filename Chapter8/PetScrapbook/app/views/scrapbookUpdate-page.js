var observable = require("data/observable");
var frame = require("ui/frame");
var scrapbook;

exports.onLoaded = function(args) {
    var page = args.object;
    var scrapbook = new observable.fromObject({
        genders: ["Female", "Male", "Other"],
        calcAge: function(birthDate){           
			var now = Date.now();
            var diff = Math.abs(now - birthDate) / 1000 / 31536000;

            return diff.toFixed(1);
        }
    });
    
    page.bindingContext = scrapbook;
};

exports.onDoneTap = function(args) {    
    var page = args.object;

    frame.topmost().navigate({ 
        moduleName: "views/scrapbook-page", 
        context: { model: scrapbook }
    });
};