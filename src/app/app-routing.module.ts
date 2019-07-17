import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MapMainComponent } from './map-main/map-main.component';
import { EditMainComponent } from './edit-main/edit-main.component';
import { ViewMainComponent } from './view-main/view-main.component';
import { LocateMainComponent } from './locate-main/locate-main.component';

const routes: Routes = [
  { path: '', component: MapMainComponent },
  { path: 'map-main', component: MapMainComponent },
  // { path: 'upload-images', component: AppComponent },
  { path: 'view-images', component: ViewMainComponent },
  { path: 'edit-images', component: EditMainComponent },
  { path: 'locate-images', component: LocateMainComponent },
  { path: '**', component: MapMainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
