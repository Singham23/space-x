import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FilterComponent } from "./components/filter/filter.component";
import { SpaceService } from "./services/space.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, FilterComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [SpaceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
