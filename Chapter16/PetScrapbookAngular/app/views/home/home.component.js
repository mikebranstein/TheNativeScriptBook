"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var HomeComponent = (function () {
    function HomeComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    HomeComponent.prototype.onContinueTap = function () {
        this.routerExtensions.navigate(["list"]);
    };
    HomeComponent.prototype.onAboutTap = function () {
        this.routerExtensions.navigate(["about"]);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: "home",
        templateUrl: "views/home/home.html",
        styleUrls: ["views/home/home.css"]
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxzREFBK0Q7QUFPL0QsSUFBYSxhQUFhO0lBQ3hCLHVCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUN0RCxDQUFDO0lBRUQscUNBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxrQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQVhELElBV0M7QUFYWSxhQUFhO0lBTHpCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTTtRQUNoQixXQUFXLEVBQUUsc0JBQXNCO1FBQ25DLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO0tBQ25DLENBQUM7cUNBRXNDLHlCQUFnQjtHQUQzQyxhQUFhLENBV3pCO0FBWFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjsgXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJob21lXCIsXG4gIHRlbXBsYXRlVXJsOiBcInZpZXdzL2hvbWUvaG9tZS5odG1sXCIsXG4gIHN0eWxlVXJsczogW1widmlld3MvaG9tZS9ob21lLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7IFxuICB9XG5cbiAgb25Db250aW51ZVRhcCgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wibGlzdFwiXSk7IFxuICB9XG5cbiAgb25BYm91dFRhcCgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiYWJvdXRcIl0pOyBcbiAgfVxufVxuIl19