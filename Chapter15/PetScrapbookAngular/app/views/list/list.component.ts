import { Component } from "@angular/core";
import { Page } from "../../models/page";
import { Router, NavigationExtras } from "@angular/router";
import { ItemEventData } from "ui/list-view";

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
            "id": 0
          }
        };
        
        this.router.navigate(["detail"], navigationExtras);
    }

    onItemTap(args: ItemEventData): void {
      let id = args.object["id"];
        let navigationExtras: NavigationExtras = {
          queryParams: {
            "id": id
          }
        };
        
        this.router.navigate(["detail"], navigationExtras);
    }
}