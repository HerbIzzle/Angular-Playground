import {Component, OnInit, Output, Input, EventEmitter, Inject} from '@angular/core';
import {UserService} from "../../user.service";
import {User} from "../User Table/User";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-user-dialog',
  template: `


    <table class="example-full-width">
      <tr>
        <mat-form-field class="example-full-width" appearance="fill">
          <mat-label>Id</mat-label>
          <input matInput type="number" [(ngModel)]="user.id"  disabled>
        </mat-form-field>
      </tr>
      <tr>
        <mat-form-field class="example-full-width" appearance="fill">
          <mat-label>First Name</mat-label>
          <input matInput [(ngModel)]="user.firstName">
        </mat-form-field>
      </tr>
      <tr>
        <mat-form-field class="example-full-width" appearance="fill">
          <mat-label>Last Name</mat-label>
          <input matInput [(ngModel)]="user.lastName">
        </mat-form-field>
      </tr>
      <tr>
        <mat-form-field class="example-full-width" appearance="fill">
          <mat-label>Birthdate</mat-label>
          <input matInput [matDatepicker]="picker" [(ngModel)]="user.birthDate">
          <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
          <mat-datepicker touchUi #picker></mat-datepicker>
        </mat-form-field>

      </tr>
      <tr>
        <mat-checkbox class="example-margin" [(ngModel)]="user.activated"> Active</mat-checkbox>
      </tr>
      <tr>

        <mat-dialog-actions align="end">
          <button mat-button mat-dialog-close>Cancel</button>
          <button mat-button mat-dialog-close="true" cdkFocusInitial (click)="addUserWithOk() ">Add User</button>
        </mat-dialog-actions>

      </tr>
    </table>
  `,
  styles: [`.example-full-width {
    width: 100%;
  }

  td {
    padding-right: 8px;
  }

  .example-margin {
    margin: 0 10px;
  }`
  ]
})
export class DialogComponent implements OnInit {


@Input() user = new User();

  constructor(private userservice : UserService) {
  }

  ngOnInit(): void {
  }


  addUserWithOk(){
    if(this.user.id){
      this.userservice.update(this.user)
    }
    else{
      this.userservice.create(this.user)
    }
  }


}
