"use strict";
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
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
        imports: [nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5QztBQUN6QyxnRkFBOEU7QUFDOUUsb0RBQW9FO0FBRXBFLGlEQUErQztBQUMvQyw4REFBNEQ7QUFDNUQsb0VBQWtFO0FBVWxFLElBQWEsU0FBUztJQUF0QjtJQUF3QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBQXpCLElBQXlCO0FBQVosU0FBUztJQVJyQixlQUFRLENBQUM7UUFDUixZQUFZLEVBQUUsQ0FBQyw0QkFBWTtZQUN6Qiw4QkFBYTtZQUNiLGtDQUFlLENBQUM7UUFDbEIsU0FBUyxFQUFFLENBQUMsa0NBQWUsQ0FBQztRQUM1QixPQUFPLEVBQUUsQ0FBQyx3Q0FBa0I7WUFDMUIsK0JBQXVCLENBQUM7S0FDM0IsQ0FBQztHQUNXLFNBQVMsQ0FBRztBQUFaLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCJcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXdzL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IERldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXdzL2RldGFpbC9kZXRhaWwuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0FwcENvbXBvbmVudCxcbiAgICBIb21lQ29tcG9uZW50LFxuICAgIERldGFpbENvbXBvbmVudF0sXG4gIGJvb3RzdHJhcDogW0RldGFpbENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuIl19