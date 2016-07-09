var frames = require("ui/frame");

function onTap_About() {
    var navigationEntry = {
        moduleName: "views/about-page",
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

function onTap_Products() {
    var navigationEntry = {
        moduleName: "views/products/products",
        transition: {
            name: "slideBottom"
        }
    };
    frames.topmost().navigate(navigationEntry);
}
exports.onTap_Products = onTap_Products;