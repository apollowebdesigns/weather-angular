import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservationsComponent } from './observations/observations.component';
import { LatestdataComponent } from './latestdata/latestdata.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'observations', component: ObservationsComponent},
  { path: 'latest', component: LatestdataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
