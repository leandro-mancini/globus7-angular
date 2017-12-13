import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Http, XHRBackend, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { 
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { httpFactory } from './http.factory';
import { Globals } from './app.globals';
import { UiKitComponent } from './ui-kit/ui-kit.component';

@NgModule({
  declarations: [
    AppComponent,
    UiKitComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule
  ],
  providers: [
    {
      provide: Http,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions, Router, Globals]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
