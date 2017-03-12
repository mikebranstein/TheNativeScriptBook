import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms"

import { AppComponent } from "./app.component";
import { HomeComponent } from "./views/home/home.component";
import { DetailComponent } from "./views/detail/detail.component";
import { SelectDateComponent } from "./views//modals/selectDate/selectDate.component";

@NgModule({
  declarations: [AppComponent,
    HomeComponent,
    DetailComponent,
    SelectDateComponent],
  entryComponents: [SelectDateComponent],
  bootstrap: [DetailComponent],
  imports: [NativeScriptModule,
    NativeScriptFormsModule]
})
export class AppModule {
}