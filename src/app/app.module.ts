import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "src/material-module";
import { ConfigPopulationComponent } from "./config-population/config-population.component";
import { FormsModule } from "@angular/forms";
import { DinamicComponent } from "./dinamic/dinamic.component";
import { CapacityComponent } from "./capacity/capacity.component";
import { TimesComponent } from "./times/times.component";
import { DeathComponent } from "./death/death.component";
import { ControlComponent } from "./control/control.component";
import { ChartsComponent } from "./charts/charts.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ConfigPopulationComponent,
    DinamicComponent,
    CapacityComponent,
    TimesComponent,
    DeathComponent,
    ControlComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
