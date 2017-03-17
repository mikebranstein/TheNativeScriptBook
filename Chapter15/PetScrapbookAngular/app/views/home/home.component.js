"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.onContinueTap = function () {
        // let navigationExtras: NavigationExtras = {
        //   queryParams: {
        //     "continueGame": true
        //   }
        // };
        // this.router.navigate(["list"], navigationExtras);
        this.router.navigate(["list"]);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: "home",
        templateUrl: "views/home/home.html",
        styleUrls: ["views/home/home.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTBDO0FBQzFDLDBDQUEyRDtBQU8zRCxJQUFhLGFBQWE7SUFDeEIsdUJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ2xDLENBQUM7SUFFRCxxQ0FBYSxHQUFiO1FBQ0UsNkNBQTZDO1FBQzdDLG1CQUFtQjtRQUNuQiwyQkFBMkI7UUFDM0IsTUFBTTtRQUNOLEtBQUs7UUFFTCxvREFBb0Q7UUFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFkRCxJQWNDO0FBZFksYUFBYTtJQUx6QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLHNCQUFzQjtRQUNuQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztLQUNuQyxDQUFDO3FDQUU0QixlQUFNO0dBRHZCLGFBQWEsQ0FjekI7QUFkWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJob21lXCIsXG4gIHRlbXBsYXRlVXJsOiBcInZpZXdzL2hvbWUvaG9tZS5odG1sXCIsXG4gIHN0eWxlVXJsczogW1widmlld3MvaG9tZS9ob21lLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICB9XG5cbiAgb25Db250aW51ZVRhcCgpOiB2b2lkIHtcbiAgICAvLyBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICAvLyAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgLy8gICAgIFwiY29udGludWVHYW1lXCI6IHRydWVcbiAgICAvLyAgIH1cbiAgICAvLyB9O1xuICAgIFxuICAgIC8vIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImxpc3RcIl0sIG5hdmlnYXRpb25FeHRyYXMpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImxpc3RcIl0pO1xuICB9XG59Il19