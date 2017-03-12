"use strict";
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_component_1 = require("./app.component");
var home_component_1 = require("./views/home/home.component");
var detail_component_1 = require("./views/detail/detail.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [app_component_1.AppComponent,
            home_component_1.HomeComponent,
            detail_component_1.DetailComponent],
        bootstrap: [detail_component_1.DetailComponent],
        imports: [nativescript_module_1.NativeScriptModule]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5QztBQUN6QyxnRkFBOEU7QUFFOUUsaURBQStDO0FBQy9DLDhEQUE0RDtBQUM1RCxvRUFBa0U7QUFTbEUsSUFBYSxTQUFTO0lBQXRCO0lBQXdCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBekIsSUFBeUI7QUFBWixTQUFTO0lBUHJCLGVBQVEsQ0FBQztRQUNSLFlBQVksRUFBRSxDQUFDLDRCQUFZO1lBQ3pCLDhCQUFhO1lBQ2Isa0NBQWUsQ0FBQztRQUNsQixTQUFTLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO1FBQzVCLE9BQU8sRUFBRSxDQUFDLHdDQUFrQixDQUFDO0tBQzlCLENBQUM7R0FDVyxTQUFTLENBQUc7QUFBWiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3cy9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBEZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3cy9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnQsXG4gICAgSG9tZUNvbXBvbmVudCxcbiAgICBEZXRhaWxDb21wb25lbnRdLFxuICBib290c3RyYXA6IFtEZXRhaWxDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0TW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiJdfQ==