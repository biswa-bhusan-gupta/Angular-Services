import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ServerComponent } from "./server/server.component"; // IMPORTING SERVER COMPONENT
import { ServerService } from "./server.service";
import { DataService } from "./data.service";

@NgModule({
  declarations: [AppComponent, ServerComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [ServerService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
