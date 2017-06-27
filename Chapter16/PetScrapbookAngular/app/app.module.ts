import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router"; 
import { routes, navigatableComponents } from "./app.routing";          

import { AppComponent } from "./app.component";
import { HomeComponent } from "./views/home/home.component";
import { ListComponent } from "./views/list/list.component";
import { AboutComponent } from "./views/about/about.component";

@NgModule({
  declarations: [
    AppComponent,
    ...navigatableComponents
  ],
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule,                
    NativeScriptRouterModule.forRoot(routes) 
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
  
export class AppModule {
}
