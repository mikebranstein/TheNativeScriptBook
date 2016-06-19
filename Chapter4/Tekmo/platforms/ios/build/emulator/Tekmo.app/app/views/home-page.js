var frames = require("ui/frame");

function onTap() {
    frames.topmost().navigate("views/about-page");
}

exports.onTap = onTap;