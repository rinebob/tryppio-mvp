import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule,  } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

// import { AngularMaterialModule } from './angular-material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MapMainComponent } from './map-main/map-main.component';
import { EditMainComponent } from './edit-main/edit-main.component';
import { MapComponent } from './map-main/map/map.component';
import { ImageListComponent } from './image-list/image-list.component';
import { ViewMainComponent } from './view-main/view-main.component';
import { ImageViewComponent } from './view-main/image-view/image-view.component';
import { ImageThumbsComponent } from './view-main/image-thumbs/image-thumbs.component';
import { ImageEditComponent } from './edit-main/image-edit/image-edit.component';
import { LocateMainComponent } from './locate-main/locate-main.component';
import { ImageLocateComponent } from './locate-main/image-locate/image-locate.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapMainComponent,
    EditMainComponent,
    MapComponent,
    ImageListComponent,
    ViewMainComponent,
    ImageViewComponent,
    ImageThumbsComponent,
    ImageEditComponent,
    LocateMainComponent,
    ImageLocateComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,

    MatToolbarModule,
    // MatAppBackground

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
