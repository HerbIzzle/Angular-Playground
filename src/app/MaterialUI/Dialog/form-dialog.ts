import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {UserService} from "../../user.service";
import {FirebaseService} from "../../service/firebase.service";


@Component({
  selector: 'app-form-dialog',
  template: `


    <form [formGroup]="form" (submit)="onSubmit()">
      <table class="example-full-width">
        <tr>
          <mat-form-field class="example-full-width" appearance="fill">
            <mat-label>Id</mat-label>
            <input matInput formControlName="id" readonly/>
          </mat-form-field>

        </tr>
        <tr>
          <mat-form-field class="example-full-width" appearance="fill">
            <mat-label>First Name</mat-label>
            <input matInput formControlName="firstName"/>
          </mat-form-field>
        </tr>
        <tr>
          <mat-form-field class="example-full-width" appearance="fill">
            <mat-label>Last Name</mat-label>
            <input matInput formControlName="lastName"/>
          </mat-form-field>
        </tr>
        <tr>
          <mat-form-field class="example-full-width" appearance="fill">
            <mat-label>Birthdate</mat-label>
            <input matInput formControlName="birthDate" [matDatepicker]="picker"/>
            <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
            <mat-datepicker touchUi #picker></mat-datepicker>
          </mat-form-field>
        </tr>
        <tr>
          <mat-checkbox class="example-margin" formControlName="activated"> Active</mat-checkbox>
        </tr>
        <tr>
          <mat-dialog-actions>
            <button class="submit" mat-button mat-dialog-close="true" type="submit">Add</button>
            <button class="close" mat-button mat-dialog-close="false">Cancel</button>
          </mat-dialog-actions>
        </tr>
      </table>
    </form>


  `,
  styles: [`.example-full-width {
    width: 100%;
  }

  tr {
    padding-right: 8px;
  }

  mat-dialog-actions {
    justify-content: flex-end;
  }

  .mat-dialog-container {
    border: solid;
  }

  button {
    border-width: 2px;
    border-style: outset;
    /*border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));*/
    border-image: initial;
  }

  .submit:hover {
    background-color: #4CAF50;
    color: white;
  }

  .close:hover {
    background-color: #f44336;
    color: white;
  }

  .example-margin {
    margin: 0 10px;
  }`
  ]
})
export class FormDialog implements OnInit {


  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userservice: UserService,
              private fire: FirebaseService,
              @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({

      id: [this.data.id],
      firstName: [this.data.firstName],
      lastName: [this.data.lastName],
      birthDate: [this.data.birthDate],
      activated: [this.data.activated]
    })
  }

  onSubmit() {

    if (this.data.id) {
      this.userservice.update(this.form.value)
      this.fire.update(this.form.value)
    } else {
      this.userservice.create(this.form.value)
      this.fire.create(this.form.value)
    this.userservice.retrieveAll();
    }
  }

}
