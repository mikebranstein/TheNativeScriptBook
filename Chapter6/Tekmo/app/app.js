var application = require("application");
application.cssFile = "./app.css";
application.start({ moduleName: "views/home-page/home-page" });

application.on(application.launchEvent, function (args) {
    if (args.android) {
        
    } else if (args.ios !== undefined) {
       
    }
});