import { Component } from "@angular/core";
import { Page } from "../../models/page";

@Component({
    selector: "list",
    templateUrl: "views/list/list.html"
})
    
export class ListComponent {
    public pages: Array<Page> = [];

    constructor() {
        let pageOne = new Page();
        pageOne.Title = "Pittens";
        
        let pageTwo = new Page();
        pageTwo.Title = "Nibbles";
        
        this.pages.push(pageOne);
        this.pages.push(pageTwo);
    }

    onAddTap(): void {
        
    }

    onItemTap(): void {
        
    }
}
