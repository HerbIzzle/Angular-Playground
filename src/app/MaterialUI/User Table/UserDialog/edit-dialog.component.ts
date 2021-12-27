import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {User} from "../User";
import {UserService} from "../../../user.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogComponent} from "./dialog.component";

@Component({
  selector: 'app-edit-dialog',
  template: `
    <table class="example-full-width">
      <tr>
        <mat-form-field class="example-full-width" appearance="fill">
          <mat-label>Id</mat-label>
          <input matInput type="number" [(ngModel)]="data.id"  disabled>
        </mat-form-field>
      </tr>
      <tr>
        <mat-form-field class="example-full-width" appearance="fill">
          <mat-label>First Name</mat-label>
          <input matInput [(ngModel)]="data.firstName">
        </mat-form-field>
      </tr>
      <tr>
        <mat-form-field class="example-full-width" appearance="fill">
          <mat-label>Last Name</mat-label>
          <input matInput [(ngModel)]="data.lastName">
        </mat-form-field>
      </tr>
      <tr>
        <mat-form-field class="example-full-width" appearance="fill">
          <mat-label>Birthdate</mat-label>
          <input matInput [matDatepicker]="picker" [(ngModel)]="data.birthDate">
          <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
          <mat-datepicker touchUi #picker></mat-datepicker>
        </mat-form-field>

      </tr>
      <tr>
        <mat-checkbox class="example-margin" [(ngModel)]="data.activated"> Active</mat-checkbox>
      </tr>
      <tr>

        <mat-dialog-actions align="end">
          <button mat-button mat-dialog-close="false"> Cancel</button>
          <button mat-button mat-dialog-close="true" cdkFocusInitial (click)="addUserWithOk() ">Confirm</button>
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
export class EditDialogComponent implements OnInit {

  @Input() user = new User();

  constructor(private userservice : UserService, @Inject(MAT_DIALOG_DATA) public data:any) {
  }

  ngOnInit(): void {
  }


  addUserWithOk(){
    if(this.data.id){
      this.userservice.update(this.data)
      this.userservice.retrieveAll();
    }
    else{
      this.userservice.create(this.data)
      this.userservice.retrieveAll();
    }
  }


  finishWithCancel(){
  }
}
