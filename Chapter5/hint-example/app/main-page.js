var frames = require("ui/frame");

function onTap() {
    var navigationEntry = {
        moduleName: "hints/hints",
        transition: {
            name: "slideBottom"
        }
    };
    frames.topmost().navigate(navigationEntry);
}
exports.onTap = onTap;