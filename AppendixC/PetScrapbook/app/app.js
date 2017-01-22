var application = require("application");
application.cssFile = "./app.css";


var dateConverter = function(value, format) {
    if (value === null || value === undefined || value === '') return '';

    var result = format;
    var day = value.getDate();
    result = result.replace("DD", day);
    var month = value.getMonth() + 1;
    result = result.replace("MM", month);
    result = result.replace("YYYY", value.getFullYear());
    return result;
};

application.resources["dateConverter"] = dateConverter;
application.resources["dateFormat"] = "MM/DD/YYYY";

application.start({ moduleName: "views/home-page" });
