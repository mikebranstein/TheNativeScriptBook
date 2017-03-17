"use strict";
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var app_component_1 = require("./app.component");
var home_component_1 = require("./views/home/home.component");
var detail_component_1 = require("./views/detail/detail.component");
var selectDate_component_1 = require("./views//modals/selectDate/selectDate.component");
var selectGender_component_1 = require("./views//modals/selectGender/selectGender.component");
var list_component_1 = require("./views/list/list.component");
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
            selectGender_component_1.SelectGenderComponent,
            list_component_1.ListComponent],
        entryComponents: [selectDate_component_1.SelectDateComponent,
            selectGender_component_1.SelectGenderComponent],
        bootstrap: [list_component_1.ListComponent],
        imports: [nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5QztBQUN6QyxnRkFBOEU7QUFDOUUsb0RBQW9FO0FBRXBFLGlEQUErQztBQUMvQyw4REFBNEQ7QUFDNUQsb0VBQWtFO0FBQ2xFLHdGQUFzRjtBQUN0Riw4RkFBNEY7QUFDNUYsOERBQTREO0FBZTVELElBQWEsU0FBUztJQUF0QjtJQUNBLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFERCxJQUNDO0FBRFksU0FBUztJQWJyQixlQUFRLENBQUM7UUFDUixZQUFZLEVBQUUsQ0FBQyw0QkFBWTtZQUN6Qiw4QkFBYTtZQUNiLGtDQUFlO1lBQ2YsMENBQW1CO1lBQ25CLDhDQUFxQjtZQUNyQiw4QkFBYSxDQUFDO1FBQ2hCLGVBQWUsRUFBRSxDQUFDLDBDQUFtQjtZQUNuQyw4Q0FBcUIsQ0FBQztRQUN4QixTQUFTLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1FBQzFCLE9BQU8sRUFBRSxDQUFDLHdDQUFrQjtZQUMxQiwrQkFBdUIsQ0FBQztLQUMzQixDQUFDO0dBQ1csU0FBUyxDQUNyQjtBQURZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCJcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXdzL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IERldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXdzL2RldGFpbC9kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTZWxlY3REYXRlQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlld3MvL21vZGFscy9zZWxlY3REYXRlL3NlbGVjdERhdGUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTZWxlY3RHZW5kZXJDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3cy8vbW9kYWxzL3NlbGVjdEdlbmRlci9zZWxlY3RHZW5kZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vdmlld3MvbGlzdC9saXN0LmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnQsXG4gICAgSG9tZUNvbXBvbmVudCxcbiAgICBEZXRhaWxDb21wb25lbnQsXG4gICAgU2VsZWN0RGF0ZUNvbXBvbmVudCxcbiAgICBTZWxlY3RHZW5kZXJDb21wb25lbnQsXG4gICAgTGlzdENvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1NlbGVjdERhdGVDb21wb25lbnQsXG4gICAgU2VsZWN0R2VuZGVyQ29tcG9uZW50XSxcbiAgYm9vdHN0cmFwOiBbTGlzdENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG59Il19