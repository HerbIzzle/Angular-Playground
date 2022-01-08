import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {User} from "../User Table/User";
import {UserService} from "../../user.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogComponent} from "./dialog.component";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatFormFieldControl, MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";


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

<!--
      <h1 mat-dialog-title>Add file</h1>
      <mat-dialog-content>
        <mat-form-field class="example-full-width" appearance="fill">
          <mat-label>Id</mat-label>
          <input matInput formControlName="id" placeholder="Enter filename">
        </mat-form-field>
        <mat-form-field class="example-full-width" appearance="fill">
          <mat-label>First Name</mat-label>
          <input matInput formControlName="firstName" placeholder="Enter filename">
        </mat-form-field>
        <mat-form-field class="example-full-width" appearance="fill">
        <mat-label>Last Name</mat-label>
          <input matInput formControlName="lastName" placeholder="Enter filename">
        </mat-form-field>
        <mat-form-field class="example-full-width" appearance="fill">
          <mat-label>Birthdate</mat-label>
          <input matInput [matDatepicker]="picker" formControlName="birthDate">
          <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
          <mat-datepicker touchUi #picker></mat-datepicker>
        </mat-form-field>
        <mat-form-field>
        <mat-checkbox class="example-margin" formControlName="activated"> Active</mat-checkbox>
        </mat-form-field>
      </mat-dialog-content>
      <mat-dialog-actions>
        <button mat-button type="submit">Add</button>
        <button mat-button type="button" (click)="dialogRef.close()">Cancel</button>
      </mat-dialog-actions> -->

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




  constructor(private userservice : UserService ,private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<EditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data:any) {
  }

  ngOnInit(): void {
   /* this.user = this.formBuilder.group({
      id: this.data.id ? this.data.id : undefined,
      firstName: this.data.firstName ? this.data.firstName : '',
      lastName:  this.data.lastName ? this.data.lastName: '',
      birthDate: this.data.birthDate ? this.data.birthDate : '',
      activated: this.data.activated ? this.data.activated : undefined
    })*/
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

 // submit(form: { value: { id: any; }; }) {
//    this.dialogRef.close(`${form.value.id}`);
//  }


  finishWithCancel(){
  }
}
