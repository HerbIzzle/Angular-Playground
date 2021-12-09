import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './BindingPlayGround/child.component';
import {FormsModule} from "@angular/forms";
import { NgServeChildComponent } from './BindingPlayGround/ng-serve-child.component';
import { TwoWayBindingComponent } from './BindingPlayGround/two-way-binding.component';
import {RouterModule} from "@angular/router";
import { BindingPlayGroundComponent } from './BindingPlayGround/binding-play-ground.component';
import { DashboardComponent } from './Dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
     NgServeChildComponent,
     TwoWayBindingComponent,
     BindingPlayGroundComponent,
     DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'bindingStuff/:id', component: BindingPlayGroundComponent },
      { path: 'dashboard/:id', component: DashboardComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
