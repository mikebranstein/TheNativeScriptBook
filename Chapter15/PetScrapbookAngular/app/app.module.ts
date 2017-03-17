import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms"
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { routes, navigatableComponents } from "./app.routing";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./views/home/home.component";
import { DetailComponent } from "./views/detail/detail.component";
import { SelectDateComponent } from "./views//modals/selectDate/selectDate.component";
import { SelectGenderComponent } from "./views//modals/selectGender/selectGender.component";
import { ListComponent } from "./views/list/list.component";

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
    NativeScriptRouterModule.forRoot(routes),
  ]
})
  
export class AppModule {
}