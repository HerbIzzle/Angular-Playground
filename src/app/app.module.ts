import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import {FormsModule} from "@angular/forms";
import { NgServeChildComponent } from './ng-serve-child.component';
import { TwoWayBindingComponent } from './two-way-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
     NgServeChildComponent,
     TwoWayBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
