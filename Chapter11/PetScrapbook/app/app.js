var application = require("application");
application.cssFile = "./app.css";

var dateConverter = function(value, format) {                           
  if (value === null || value === undefined || value === '') return ''; 
  var parsedDate = new Date(value);                                     
                                                                        
  var result = format;                                                  
  var day = parsedDate.getDate();                                       
  result = result.replace("DD", day);                                   
  var month = parsedDate.getMonth() + 1;                                
  result = result.replace("MM", month);                                 
  result = result.replace("YYYY", parsedDate.getFullYear());            
  return result;                                                        
};                                                                      
var resources = application.getResources(); 
resources.dateConverter = dateConverter;  
resources.dateFormat = "MM/DD/YYYY";      

application.start({ moduleName: "views/home-page" });
