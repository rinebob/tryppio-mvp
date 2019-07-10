import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  // { path: 'map-main', component: AppComponent },
  // { path: 'upload-images', component: AppComponent },
  // { path: 'view-images', component: AppComponent },
  // { path: 'edit-images', component: AppComponent },
  // { path: 'locate-images', component: AppComponent },
  { path: '**', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
