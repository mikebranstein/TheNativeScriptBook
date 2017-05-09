import { Component, OnInit } from "@angular/core";
import { Page } from "../../models/page";
import { Router, NavigationExtras } from "@angular/router";
import { ItemEventData } from "ui/list-view";
import { PageService } from "../../services/page.service";

@Component({
  selector: "list",
  providers: [ PageService ],
    templateUrl: "views/list/list.html"
})

export class ListComponent implements OnInit {
  public pages: Array<Page>;

    constructor(private router: Router, private pageService: PageService) {
    }

  ngOnInit(): void {
      this.pages = this.pageService.getPages();
  }


    onAddTap(): void {
        let navigationExtras: NavigationExtras = {
          queryParams: {
            "id": this.pages.length
          }
        };
        
        this.router.navigate(["detail"], navigationExtras);
    }

    onItemTap(args: ItemEventData): void {
      let id = args.index;
      let navigationExtras: NavigationExtras = {
        queryParams: {
          "id": id
        }
      };
        
      this.router.navigate(["detail"], navigationExtras);
    }
}