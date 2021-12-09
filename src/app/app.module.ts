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
import { PrimeNgComponent } from './prime-ng/prime-ng.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
     NgServeChildComponent,
     TwoWayBindingComponent,
     BindingPlayGroundComponent,
     DashboardComponent,
     PrimeNgComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'bindingStuff/:id', component: BindingPlayGroundComponent },
      { path: 'primeng/:id', component: PrimeNgComponent },
      { path: 'dashboard/:id', component: DashboardComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
