import { HomeComponent } from "./views/home/home.component";
import { ListComponent } from "./views/list/list.component";
import { AboutComponent } from "./views/about/about.component";

export const routes: any = [ 
  { path: "", component: HomeComponent }, 
  { path: "home", component: HomeComponent },
  { path: "list", component: ListComponent },
  { path: "about", component: AboutComponent } 
];

export const navigatableComponents: any = [ 
  HomeComponent, 
  ListComponent, 
  AboutComponent
];
