import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {User} from "./User";
import {MatTableDataSource} from "@angular/material/table";
import {UserService} from "../../user.service"
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatSort, Sort} from "@angular/material/sort";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {FormDialog} from "../Dialog/form-dialog";


@Component({
  selector: 'app-user-table',
  template: `

    <div>
      <button mat-raised-button (click)="createCustomer()"
      >
        <mat-icon>add</mat-icon>
        Create
      </button>
      <mat-form-field appearance="standard">
        <mat-label>Filter</mat-label>
        <input matInput (keyup)="applyFilter($event)" placeholder="First or Last Name" #input>
      </mat-form-field>
    </div>

    <table mat-table [dataSource]="dataSource" class="mat-elevation-z8" matSort
           (matSortChange)="announceSortChange($event)">

      <!-- Position Column -->
      <ng-container matColumnDef="id">
        <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by Id"> Id</th>
        <td mat-cell *matCellDef="let element"> {{element.id}}</td>
      </ng-container>

      <!-- Name Column -->
      <ng-container matColumnDef="firstName">
        <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by First Name"> First Name
        </th>
        <td mat-cell *matCellDef="let element"> {{element.firstName}} </td>
      </ng-container>

      <!-- Weight Column -->
      <ng-container matColumnDef="lastName">
        <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by Last Name"> Last Name</th>
        <td mat-cell *matCellDef="let element"> {{element.lastName}} </td>
      </ng-container>

      <!-- Symbol Column -->
      <ng-container matColumnDef="birthDate">
        <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by Birthdate"> Birthdate</th>
        <td mat-cell *matCellDef="let element"> {{element.birthDate}} </td>
      </ng-container>

      <ng-container matColumnDef="activated">
        <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by activated"> isActive</th>
        <td mat-cell *matCellDef="let element">
          <mat-icon *ngIf="element.activated; else notActive">check_box</mat-icon>
        </td>
        <ng-template #notActive>
          <mat-icon>check_box_outline_blank</mat-icon>
        </ng-template>
      </ng-container>


      <ng-container matColumnDef="Action">
        <th mat-header-cell *matHeaderCellDef> Action</th>
        <td mat-cell *matCellDef="let element">
          <button
            (click)="editCustomer(element)">
            <mat-icon>edit</mat-icon>
          </button>
          <button (click)="deleteCustomer(element)">
            <mat-icon>delete_outline</mat-icon>
          </button>
        </td>

      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>

      <!-- Row shown when there is no matching data. -->
      <tr class="mat-row" *matNoDataRow>
        <td class="mat-cell" colspan="4">No data matching the filter "{{input.value}}"</td>
      </tr>
    </table>

  `,
  styles: [`table {
    width: 100%;
  }

  button {
    margin-left: 12px
  }

  mat-form-field {
    margin-left: 12px;
    font-size: 16px;
    margin-top: 16px;
    width: 60%
  }

  `
  ]
})
export class UserTableComponent implements OnInit {

  constructor(private userservice: UserService, private _liveAnnouncer: LiveAnnouncer, private dialog: MatDialog) {
  }

  @ViewChild(MatSort) sort!: MatSort;
  @Output() select = new EventEmitter();
  userList: User[] = [];
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'birthDate', 'activated', 'Action'];
  dataSource: any;
  searchTerm = '';

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.userservice.retrieveAll()
      .then(userList => this.userList = userList)
      .then(userList => {
        this.dataSource = new MatTableDataSource(userList)
        if (this.sort) {
          this.dataSource.sort = this.sort
        }

        this.dataSource.filterPredicate = (userList: any, filterValue: string) =>
          (userList.firstName + userList.lastName)
            .trim()
            .toLocaleLowerCase().indexOf(filterValue.trim().toLocaleLowerCase()) >= 0;
      })
      .catch();
  }


  createCustomer(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;

    dialogConfig.data = new User();

    const dialogRef = this.dialog.open(FormDialog, dialogConfig);

    dialogRef.afterClosed().subscribe(
      () => this.refresh()
    )


  }

  editCustomer(user: User): void {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.data = user;

    console.log(dialogConfig.data);

    const dialogRef = this.dialog.open(FormDialog, dialogConfig);

    dialogRef.afterClosed().subscribe(
      () => this.refresh()
    );

  }

  deleteCustomer(user: User): void {
    if (confirm('Willst du den Kunden wirklich löschen?')) {
      this.userservice.delete(user.id!)
        .then(() => this.refresh());
    }
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
  }

  announceSortChange(sortState: Sort): void {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
