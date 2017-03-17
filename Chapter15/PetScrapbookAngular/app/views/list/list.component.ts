import { Component } from "@angular/core";
import { Page } from "../../models/page";
import { Router, NavigationExtras } from "@angular/router";

@Component({
    selector: "list",
    templateUrl: "views/list/list.html"
})

export class ListComponent {
    public pages: Array<Page>;

    constructor(private router: Router) {
    }

    onAddTap(): void {
        let navigationExtras: NavigationExtras = {
          queryParams: {
            //"continueGame": true
          }
        };
        
        this.router.navigate(["detail"], navigationExtras);
    }

    onItemTap(): void {
        let navigationExtras: NavigationExtras = {
          queryParams: {
            //"continueGame": true
          }
        };
        
        this.router.navigate(["detail"], navigationExtras);
    }
}