import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./views/home/home.component";
import { DetailComponent } from "./views/detail/detail.component";

@NgModule({
  declarations: [AppComponent,
    HomeComponent,
    DetailComponent],
  bootstrap: [DetailComponent],
  imports: [NativeScriptModule]
})
export class AppModule {}
