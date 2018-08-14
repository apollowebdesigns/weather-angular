import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/weather.reducer';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { ObservationsComponent } from './observations/observations.component';
import { LatestdataComponent } from './latestdata/latestdata.component';


@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent,
    ObservationsComponent,
    LatestdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      weather: reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
