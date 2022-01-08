import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


import {AppComponent} from './app.component';
import {ChildComponent} from './BindingPlayGround/child.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgServeChildComponent} from './BindingPlayGround/ng-serve-child.component';
import {TwoWayBindingComponent} from './BindingPlayGround/two-way-binding.component';
import {RouterModule} from "@angular/router";
import {BindingPlayGroundComponent} from './BindingPlayGround/binding-play-ground.component';
import {DashboardComponent} from './Dashboard/dashboard.component';
import {NavigationMenu} from './MaterialUI/Navigation/navigation-menu';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {MatTableModule} from "@angular/material/table";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {HeaderComponent} from './MaterialUI/Navigation/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {SidenavListComponent} from './MaterialUI/Navigation/sidenav-list.component';
import {MatMenuModule} from "@angular/material/menu";
import {UserTableComponent} from './MaterialUI/User Table/user-table.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {DialogComponent} from './MaterialUI/Dialog/dialog.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSortModule} from "@angular/material/sort";
import {CommonModule} from "@angular/common";
import {EditDialogComponent} from "./MaterialUI/Dialog/edit-dialog.component";
import {FormDialog} from './MaterialUI/Dialog/form-dialog';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    NgServeChildComponent,
    TwoWayBindingComponent,
    BindingPlayGroundComponent,
    DashboardComponent,
    NavigationMenu,
    HeaderComponent,
    SidenavListComponent,
    UserTableComponent,
    DialogComponent,
    EditDialogComponent,
    FormDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatSliderModule,
    MatTableModule,
    RouterModule.forRoot([
      {path: 'bindingStuff/:id', component: BindingPlayGroundComponent},
      {
        path: 'customerManagement',
        component: NavigationMenu,

        children: [{path: 'usertable', component: UserTableComponent}]
      },
      {path: 'dashboard/:id', component: DashboardComponent},
      // {path: 'usertable', component: CostumerManager , outlet:'child'},
    ]),
    MatListModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSortModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
