import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./views/home/home.component";

@NgModule({
  declarations: [AppComponent,
    HomeComponent],
  bootstrap: [HomeComponent],
  imports: [NativeScriptModule]
})
export class AppModule {}
