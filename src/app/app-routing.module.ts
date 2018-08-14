import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservationsComponent } from './observations/observations.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'observations', component: ObservationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
