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
import { SidenavListComponent } from './MaterialUI/Material UI Components/sidenav-list.component';
import {MatMenuModule} from "@angular/material/menu";
import { UserTable } from './MaterialUI/User Table/user-table';
import {MatFormFieldControl, MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import { AddUserDialogComponent } from './MaterialUI/Material UI Components/UserDialog/add-user-dialog.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSortModule} from "@angular/material/sort";
import {CommonModule} from "@angular/common";
import { SearchFilterPipe } from './search-filter.pipe';


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
     UserTable,
     AddUserDialogComponent,
     SearchFilterPipe
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
        path: 'materialui',
        component: MaterialParent,

        children: [{path: 'usertable', component: UserTable}]
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
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSortModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
