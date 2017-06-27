"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_service_1 = require("../../services/page.service");
var ListComponent = (function () {
    function ListComponent(routerExtensions, pageService) {
        this.routerExtensions = routerExtensions;
        this.pageService = pageService;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.pages = this.pageService.getPages();
    };
    ListComponent.prototype.onAddTap = function () {
        var options = {
            clearHistory: true
        };
        this.routerExtensions.navigate(["detail", this.pages.length], options);
    };
    ListComponent.prototype.onItemTap = function (args) {
        var id = args.index;
        this.routerExtensions.navigate(["detail", id]);
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        selector: "list",
        providers: [page_service_1.PageService],
        templateUrl: "views/list/list.html",
        styleUrls: ["views/list/list.css"]
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions,
        page_service_1.PageService])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCxzREFBK0Q7QUFFL0QsNERBQTBEO0FBVTFELElBQWEsYUFBYTtJQUd4Qix1QkFDVSxnQkFBa0MsRUFDbEMsV0FBd0I7UUFEeEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFJLENBQUM7SUFFdkMsZ0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNFLElBQUksT0FBTyxHQUFzQjtZQUMvQixZQUFZLEVBQUUsSUFBSTtTQUNuQixDQUFDO1FBRUYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FDNUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFDN0IsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQsaUNBQVMsR0FBVCxVQUFVLElBQW1CO1FBQzNCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFcEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFSCxvQkFBQztBQUFELENBQUMsQUEzQkQsSUEyQkM7QUEzQlksYUFBYTtJQVB6QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU07UUFDaEIsU0FBUyxFQUFFLENBQUUsMEJBQVcsQ0FBRTtRQUMxQixXQUFXLEVBQUUsc0JBQXNCO1FBQ25DLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO0tBQ25DLENBQUM7cUNBTTRCLHlCQUFnQjtRQUNyQiwwQkFBVztHQUx2QixhQUFhLENBMkJ6QjtBQTNCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3BhZ2VcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uT3B0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvbnMtbG9jYXRpb24tc3RyYXRlZ3lcIjsgLy8gI0FcbmltcG9ydCB7IFBhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3BhZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgSXRlbUV2ZW50RGF0YSB9IGZyb20gXCJ1aS9saXN0LXZpZXdcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImxpc3RcIixcbiAgcHJvdmlkZXJzOiBbIFBhZ2VTZXJ2aWNlIF0sXG4gIHRlbXBsYXRlVXJsOiBcInZpZXdzL2xpc3QvbGlzdC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1widmlld3MvbGlzdC9saXN0LmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgcGFnZXM6IEFycmF5PFBhZ2U+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgXG4gICAgcHJpdmF0ZSBwYWdlU2VydmljZTogUGFnZVNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucGFnZXMgPSB0aGlzLnBhZ2VTZXJ2aWNlLmdldFBhZ2VzKCk7XG4gIH1cblxuICBvbkFkZFRhcCgpOiB2b2lkIHtcbiAgICBsZXQgb3B0aW9uczogTmF2aWdhdGlvbk9wdGlvbnMgPSB7IFxuICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlICAgICAgICAgICAgICAgXG4gICAgfTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoXG4gICAgICBbXCJkZXRhaWxcIiwgdGhpcy5wYWdlcy5sZW5ndGhdLCAgIFxuICAgICAgb3B0aW9ucyk7IFxuICB9XG5cbiAgb25JdGVtVGFwKGFyZ3M6IEl0ZW1FdmVudERhdGEpOiB2b2lkIHtcbiAgICBsZXQgaWQgPSBhcmdzLmluZGV4O1xuICAgICAgICBcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiZGV0YWlsXCIsIGlkXSk7XG4gIH1cblxufSJdfQ==