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
import { MaterialParent } from './MaterialUI/material-parent';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import { MatTableModule} from "@angular/material/table";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import { HeaderComponent } from './MaterialUI/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { SidenavListComponent } from './MaterialUI/sidenav-list.component';
import {MatMenuModule} from "@angular/material/menu";
import { CostumerManager } from './Costumer Manager/costumer-manager';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
     NgServeChildComponent,
     TwoWayBindingComponent,
     BindingPlayGroundComponent,
     DashboardComponent,
     MaterialParent,
     HeaderComponent,
     SidenavListComponent,
     CostumerManager
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatSliderModule,
    MatTableModule,
    RouterModule.forRoot([
      {path: 'bindingStuff/:id', component: BindingPlayGroundComponent},
      {path: 'materialui',
        component: MaterialParent,

        children: [{ path : 'usertable' , component : CostumerManager}]} ,
      {path: 'dashboard/:id', component: DashboardComponent},
     // {path: 'usertable', component: CostumerManager , outlet:'child'},
    ]),
    MatListModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
