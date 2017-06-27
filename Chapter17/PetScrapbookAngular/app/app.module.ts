import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router"; 
import { routes, navigatableComponents } from "./app.routing";          
import { NativeScriptFormsModule } from "nativescript-angular/forms";     // #A

import { AppComponent } from "./app.component";
import { HomeComponent } from "./views/home/home.component";
import { ListComponent } from "./views/list/list.component";
import { DetailComponent } from "./views/detail/detail.component";
import { AboutComponent } from "./views/about/about.component";
import { SelectDateComponent }                                     
  from "./views/modals/select-date/select-date.component";        
import { SelectGenderComponent }                                     
  from "./views/modals/select-gender/select-gender.component";        

@NgModule({
  declarations: [
    AppComponent,
    SelectDateComponent,
    SelectGenderComponent,
    ...navigatableComponents
  ],
  entryComponents: [    
    SelectDateComponent,
    SelectGenderComponent 
  ],                    
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule,                
    NativeScriptRouterModule.forRoot(routes) 
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
  
export class AppModule {
}

