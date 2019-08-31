import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SMNUIModule} from 'ng-smn-ui';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {RoutingModule} from './app.router';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GraficoComponent} from './grafico/grafico.component';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';


FusionChartsModule.fcRoot(FusionCharts, Charts)


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GraficoComponent


  ],
  imports: [
    BrowserModule,
    SMNUIModule,
    RouterModule,
    RoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    FusionChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
