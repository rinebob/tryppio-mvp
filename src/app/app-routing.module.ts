import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MapMainComponent } from './map-main/map-main.component';

const routes: Routes = [
  { path: '', component: MapMainComponent },
  { path: 'map-main', component: MapMainComponent },
  // { path: 'upload-images', component: AppComponent },
  // { path: 'view-images', component: AppComponent },
  // { path: 'edit-images', component: AppComponent },
  // { path: 'locate-images', component: AppComponent },
  { path: '**', component: MapMainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
