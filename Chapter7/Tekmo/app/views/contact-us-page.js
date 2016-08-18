var dialogsModule = require("ui/dialogs"); 

function onTap(args) {
  console.log("submit button tapped"); 
  
  dialogsModule.alert("Your message has been sent."); 
}  
exports.onTap = onTap;
