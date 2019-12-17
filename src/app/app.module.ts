import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TooltipModule} from 'ngx-bootstrap';
import { FontawesomeModule } from './fontawesome.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    FontawesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
