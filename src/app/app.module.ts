import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {About_meComponent} from './about_me/about_me.component';
import { FormComponent } from './form/form.component'

@NgModule({
  declarations: [
    AppComponent,
    About_meComponent,
    FormComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
