import { Component } from "@angular/core";
import { Page } from "../../models/page";

@Component({
    selector: "list",
    templateUrl: "views/list/list.html"
})
    
export class ListComponent {
    public pages: Array<Page>;

    constructor() {

    }

    onAddTap(): void {
        
    }

    onItemTap(): void {
        
    }
}
