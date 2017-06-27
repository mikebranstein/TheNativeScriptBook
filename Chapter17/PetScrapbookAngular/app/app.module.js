"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var app_routing_1 = require("./app.routing");
var forms_1 = require("nativescript-angular/forms"); // #A
var app_component_1 = require("./app.component");
var select_date_component_1 = require("./views/modals/select-date/select-date.component");
var select_gender_component_1 = require("./views/modals/select-gender/select-gender.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            select_date_component_1.SelectDateComponent,
            select_gender_component_1.SelectGenderComponent
        ].concat(app_routing_1.navigatableComponents),
        entryComponents: [
            select_date_component_1.SelectDateComponent,
            select_gender_component_1.SelectGenderComponent
        ],
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            router_1.NativeScriptRouterModule,
            router_1.NativeScriptRouterModule.forRoot(app_routing_1.routes)
        ],
        schemas: [core_1.NO_ERRORS_SCHEMA],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLHNEQUF1RTtBQUN2RSw2Q0FBOEQ7QUFDOUQsb0RBQXFFLENBQUssS0FBSztBQUUvRSxpREFBK0M7QUFLL0MsMEZBQzBEO0FBQzFELGdHQUM4RDtBQXlCOUQsSUFBYSxTQUFTO0lBQXRCO0lBQ0EsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQURELElBQ0M7QUFEWSxTQUFTO0lBdkJyQixlQUFRLENBQUM7UUFDUixZQUFZO1lBQ1YsNEJBQVk7WUFDWiwyQ0FBbUI7WUFDbkIsK0NBQXFCO2lCQUNsQixtQ0FBcUIsQ0FDekI7UUFDRCxlQUFlLEVBQUU7WUFDZiwyQ0FBbUI7WUFDbkIsK0NBQXFCO1NBQ3RCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsNEJBQVk7U0FDYjtRQUNELE9BQU8sRUFBRTtZQUNQLHdDQUFrQjtZQUNsQiwrQkFBdUI7WUFDdkIsaUNBQXdCO1lBQ3hCLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxvQkFBTSxDQUFDO1NBQ3pDO1FBQ0QsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7S0FDNUIsQ0FBQztHQUVXLFNBQVMsQ0FDckI7QUFEWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7IFxuaW1wb3J0IHsgcm91dGVzLCBuYXZpZ2F0YWJsZUNvbXBvbmVudHMgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiOyAgICAgICAgICBcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7ICAgICAvLyAjQVxuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlld3MvaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTGlzdENvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXdzL2xpc3QvbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IERldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXdzL2RldGFpbC9kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBYm91dENvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXdzL2Fib3V0L2Fib3V0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2VsZWN0RGF0ZUNvbXBvbmVudCB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBmcm9tIFwiLi92aWV3cy9tb2RhbHMvc2VsZWN0LWRhdGUvc2VsZWN0LWRhdGUuY29tcG9uZW50XCI7ICAgICAgICBcbmltcG9ydCB7IFNlbGVjdEdlbmRlckNvbXBvbmVudCB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBmcm9tIFwiLi92aWV3cy9tb2RhbHMvc2VsZWN0LWdlbmRlci9zZWxlY3QtZ2VuZGVyLmNvbXBvbmVudFwiOyAgICAgICAgXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudCxcbiAgICBTZWxlY3REYXRlQ29tcG9uZW50LFxuICAgIFNlbGVjdEdlbmRlckNvbXBvbmVudCxcbiAgICAuLi5uYXZpZ2F0YWJsZUNvbXBvbmVudHNcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbICAgIFxuICAgIFNlbGVjdERhdGVDb21wb25lbnQsXG4gICAgU2VsZWN0R2VuZGVyQ29tcG9uZW50IFxuICBdLCAgICAgICAgICAgICAgICAgICAgXG4gIGJvb3RzdHJhcDogW1xuICAgIEFwcENvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSwgICAgICAgICAgICAgICAgXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKSBcbiAgXSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxufSlcbiAgXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcbn1cblxuIl19