import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import {FormsModule} from "@angular/forms";
import { NgServeChildComponent } from './ng-serve-child.component';

@NgModule({
  declarations: [
    AppComponent,

    ChildComponent,
     NgServeChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
