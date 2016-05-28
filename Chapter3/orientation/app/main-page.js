var frame = require("ui/frame");
function onLoaded(args) {

}
exports.onLoaded = onLoaded;

function onTap(args) {
    frame.topmost().navigate({ moduleName: "main-page", clearHistory: true });    
}
exports.onTap = onTap;