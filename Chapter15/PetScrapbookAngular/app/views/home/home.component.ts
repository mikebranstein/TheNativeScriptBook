import { Component } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: "home",
  templateUrl: "views/home/home.html",
  styleUrls: ["views/home/home.css"]
})
export class HomeComponent {
  constructor(private router: Router) {
  }

  onContinueTap(): void {
    // let navigationExtras: NavigationExtras = {
    //   queryParams: {
    //     "continueGame": true
    //   }
    // };
    
    // this.router.navigate(["list"], navigationExtras);
    this.router.navigate(["list"]);
  }
}