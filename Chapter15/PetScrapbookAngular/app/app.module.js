"use strict";
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var app_component_1 = require("./app.component");
var home_component_1 = require("./views/home/home.component");
var detail_component_1 = require("./views/detail/detail.component");
var selectDate_component_1 = require("./views//modals/selectDate/selectDate.component");
var selectGender_component_1 = require("./views//modals/selectGender/selectGender.component");
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
            selectDate_component_1.SelectDateComponent,
            selectGender_component_1.SelectGenderComponent],
        entryComponents: [selectDate_component_1.SelectDateComponent,
            selectGender_component_1.SelectGenderComponent],
        bootstrap: [detail_component_1.DetailComponent],
        imports: [nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5QztBQUN6QyxnRkFBOEU7QUFDOUUsb0RBQW9FO0FBRXBFLGlEQUErQztBQUMvQyw4REFBNEQ7QUFDNUQsb0VBQWtFO0FBQ2xFLHdGQUFzRjtBQUN0Riw4RkFBNEY7QUFjNUYsSUFBYSxTQUFTO0lBQXRCO0lBQ0EsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQURELElBQ0M7QUFEWSxTQUFTO0lBWnJCLGVBQVEsQ0FBQztRQUNSLFlBQVksRUFBRSxDQUFDLDRCQUFZO1lBQ3pCLDhCQUFhO1lBQ2Isa0NBQWU7WUFDZiwwQ0FBbUI7WUFDbkIsOENBQXFCLENBQUM7UUFDeEIsZUFBZSxFQUFFLENBQUMsMENBQW1CO1lBQ25DLDhDQUFxQixDQUFDO1FBQ3hCLFNBQVMsRUFBRSxDQUFDLGtDQUFlLENBQUM7UUFDNUIsT0FBTyxFQUFFLENBQUMsd0NBQWtCO1lBQzFCLCtCQUF1QixDQUFDO0tBQzNCLENBQUM7R0FDVyxTQUFTLENBQ3JCO0FBRFksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIlxuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlld3MvaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlld3MvZGV0YWlsL2RldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNlbGVjdERhdGVDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3cy8vbW9kYWxzL3NlbGVjdERhdGUvc2VsZWN0RGF0ZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNlbGVjdEdlbmRlckNvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXdzLy9tb2RhbHMvc2VsZWN0R2VuZGVyL3NlbGVjdEdlbmRlci5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQXBwQ29tcG9uZW50LFxuICAgIEhvbWVDb21wb25lbnQsXG4gICAgRGV0YWlsQ29tcG9uZW50LFxuICAgIFNlbGVjdERhdGVDb21wb25lbnQsXG4gICAgU2VsZWN0R2VuZGVyQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbU2VsZWN0RGF0ZUNvbXBvbmVudCxcbiAgICBTZWxlY3RHZW5kZXJDb21wb25lbnRdLFxuICBib290c3RyYXA6IFtEZXRhaWxDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xufSJdfQ==