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



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapMainComponent
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
