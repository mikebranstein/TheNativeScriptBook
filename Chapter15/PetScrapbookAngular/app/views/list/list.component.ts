import { Component } from "@angular/core";
import { Page } from "../../models/page";
import { Router, NavigationExtras } from "@angular/router";
import { ItemEventData } from "ui/list-view";
import { FileSystemService } from "../../services/fileSystemService";

@Component({
  selector: "list",
  providers: [FileSystemService],
    templateUrl: "views/list/list.html"
})

export class ListComponent {
    public pages: Array<Page>;

    constructor(private router: Router, private fileSystemService: FileSystemService) {
      this.pages = fileSystemService.getPages();
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