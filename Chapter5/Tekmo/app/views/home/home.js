var frames = require("ui/frame");

function onTap_About() {
    var navigationEntry = {
        moduleName: "views/about/about",
        transition: {
            name: "slideBottom"
        }
    };
    frames.topmost().navigate(navigationEntry);
}
exports.onTap_About = onTap_About;

function onTap_ContactUs() {
    var navigationEntry = {
        moduleName: "views/contact-us/contact-us",
        transition: {
            name: "slideBottom"
        }
    };
    frames.topmost().navigate(navigationEntry);
}
exports.onTap_ContactUs = onTap_ContactUs;