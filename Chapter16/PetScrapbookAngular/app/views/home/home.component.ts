import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router"; 

@Component({
  selector: "home",
  templateUrl: "views/home/home.html",
  styleUrls: ["views/home/home.css"]
})
export class HomeComponent {
  constructor(private routerExtensions: RouterExtensions) { 
  }

  onContinueTap(): void {
    this.routerExtensions.navigate(["list"]); 
  }
}
