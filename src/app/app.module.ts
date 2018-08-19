import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatFormFieldModule, MatInputModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/weather.reducer';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { ObservationsComponent } from './observations/observations.component';
import { LatestdataComponent } from './latestdata/latestdata.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart/chart.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent,
    ObservationsComponent,
    LatestdataComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ChartsModule,
    HttpClientModule,
    StoreModule.forRoot({
      weather: reducer
    })
  ],
  exports: [
    ReadComponent
  ],
  providers: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ChartsModule,
    HttpClientModule,
    StoreModule,
    ReadComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
