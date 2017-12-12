import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule
} from '@angular/material';

import { AppComponent } from './app.component';

import { AppRouting } from './app.routing';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
