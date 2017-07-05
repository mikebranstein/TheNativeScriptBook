var frames = require("ui/frame");
var navigationEntry = {
    moduleName: "views/about/about",
    transition: {
        name: "slideBottom"
    }
};

function onTap() {
    frames.topmost().navigate(navigationEntry);
}

exports.onTap = onTap;