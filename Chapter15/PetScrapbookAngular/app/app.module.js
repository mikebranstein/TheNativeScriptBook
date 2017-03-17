"use strict";
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var router_1 = require("nativescript-angular/router");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var selectDate_component_1 = require("./views//modals/selectDate/selectDate.component");
var selectGender_component_1 = require("./views//modals/selectGender/selectGender.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            selectDate_component_1.SelectDateComponent,
            selectGender_component_1.SelectGenderComponent
        ].concat(app_routing_1.navigatableComponents),
        entryComponents: [
            selectDate_component_1.SelectDateComponent,
            selectGender_component_1.SelectGenderComponent
        ],
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            router_1.NativeScriptRouterModule,
            router_1.NativeScriptRouterModule.forRoot(app_routing_1.routes),
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5QztBQUN6QyxnRkFBOEU7QUFDOUUsb0RBQW9FO0FBQ3BFLHNEQUF1RTtBQUN2RSw2Q0FBOEQ7QUFFOUQsaURBQStDO0FBRy9DLHdGQUFzRjtBQUN0Riw4RkFBNEY7QUF5QjVGLElBQWEsU0FBUztJQUF0QjtJQUNBLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFERCxJQUNDO0FBRFksU0FBUztJQXRCckIsZUFBUSxDQUFDO1FBQ1IsWUFBWTtZQUNWLDRCQUFZO1lBQ1osMENBQW1CO1lBQ25CLDhDQUFxQjtpQkFDbEIsbUNBQXFCLENBQ3pCO1FBQ0QsZUFBZSxFQUFFO1lBQ2YsMENBQW1CO1lBQ25CLDhDQUFxQjtTQUN0QjtRQUNELFNBQVMsRUFBRTtZQUNULDRCQUFZO1NBQ2I7UUFDRCxPQUFPLEVBQUU7WUFDUCx3Q0FBa0I7WUFDbEIsK0JBQXVCO1lBQ3ZCLGlDQUF3QjtZQUN4QixpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsb0JBQU0sQ0FBQztTQUN6QztLQUNGLENBQUM7R0FFVyxTQUFTLENBQ3JCO0FBRFksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIlxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgcm91dGVzLCBuYXZpZ2F0YWJsZUNvbXBvbmVudHMgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlld3MvaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlld3MvZGV0YWlsL2RldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNlbGVjdERhdGVDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3cy8vbW9kYWxzL3NlbGVjdERhdGUvc2VsZWN0RGF0ZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNlbGVjdEdlbmRlckNvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXdzLy9tb2RhbHMvc2VsZWN0R2VuZGVyL3NlbGVjdEdlbmRlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3cy9saXN0L2xpc3QuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudCxcbiAgICBTZWxlY3REYXRlQ29tcG9uZW50LFxuICAgIFNlbGVjdEdlbmRlckNvbXBvbmVudCxcbiAgICAuLi5uYXZpZ2F0YWJsZUNvbXBvbmVudHNcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgU2VsZWN0RGF0ZUNvbXBvbmVudCxcbiAgICBTZWxlY3RHZW5kZXJDb21wb25lbnRcbiAgXSxcbiAgYm9vdHN0cmFwOiBbXG4gICAgQXBwQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyksXG4gIF1cbn0pXG4gIFxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG59Il19