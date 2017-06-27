import { HomeComponent } from "./views/home/home.component"; 
import { ListComponent } from "./views/list/list.component"; 

export const routes: any = [ 
  { path: "", component: HomeComponent }, 
  { path: "home", component: HomeComponent }, 
  { path: "list", component: ListComponent } 
];

export const navigatableComponents: any = [ 
  HomeComponent, 
  ListComponent 
];
