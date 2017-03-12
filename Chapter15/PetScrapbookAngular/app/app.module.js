"use strict";
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var app_component_1 = require("./app.component");
var home_component_1 = require("./views/home/home.component");
var detail_component_1 = require("./views/detail/detail.component");
var selectDate_component_1 = require("./views//modals/selectDate/selectDate.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [app_component_1.AppComponent,
            home_component_1.HomeComponent,
            detail_component_1.DetailComponent,
            selectDate_component_1.SelectDateComponent],
        entryComponents: [selectDate_component_1.SelectDateComponent],
        bootstrap: [detail_component_1.DetailComponent],
        imports: [nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5QztBQUN6QyxnRkFBOEU7QUFDOUUsb0RBQW9FO0FBRXBFLGlEQUErQztBQUMvQyw4REFBNEQ7QUFDNUQsb0VBQWtFO0FBQ2xFLHdGQUFzRjtBQVl0RixJQUFhLFNBQVM7SUFBdEI7SUFDQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBREQsSUFDQztBQURZLFNBQVM7SUFWckIsZUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFLENBQUMsNEJBQVk7WUFDekIsOEJBQWE7WUFDYixrQ0FBZTtZQUNmLDBDQUFtQixDQUFDO1FBQ3RCLGVBQWUsRUFBRSxDQUFDLDBDQUFtQixDQUFDO1FBQ3RDLFNBQVMsRUFBRSxDQUFDLGtDQUFlLENBQUM7UUFDNUIsT0FBTyxFQUFFLENBQUMsd0NBQWtCO1lBQzFCLCtCQUF1QixDQUFDO0tBQzNCLENBQUM7R0FDVyxTQUFTLENBQ3JCO0FBRFksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIlxuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlld3MvaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlld3MvZGV0YWlsL2RldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNlbGVjdERhdGVDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3cy8vbW9kYWxzL3NlbGVjdERhdGUvc2VsZWN0RGF0ZS5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQXBwQ29tcG9uZW50LFxuICAgIEhvbWVDb21wb25lbnQsXG4gICAgRGV0YWlsQ29tcG9uZW50LFxuICAgIFNlbGVjdERhdGVDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtTZWxlY3REYXRlQ29tcG9uZW50XSxcbiAgYm9vdHN0cmFwOiBbRGV0YWlsQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcbn0iXX0=