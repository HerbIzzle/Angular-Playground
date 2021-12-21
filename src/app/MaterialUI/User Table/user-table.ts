import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "./User";
import {MatTableDataSource} from "@angular/material/table";
import {UserService} from "../../user.service";
import {Observable} from "rxjs";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatSort, Sort} from "@angular/material/sort";



@Component({
  selector: 'app-user-table',
  template: `

     <mat-form-field appearance="standard">
    <mat-label>Filter</mat-label>
    <input matInput (keyup)="applyFilter($event)" placeholder="Ex. ium" #input>
  </mat-form-field>

<!--
   <mat-label>Filter</mat-label>
  <p>
    <input [(ngModel)]="searchTerm" type="text" name="searchCustomers" placeholder="Search ..." #htmlInputElement/>
  </p>
-->
  <table mat-table [dataSource]="dataSource" class="mat-elevation-z8" matSort (matSortChange)="announceSortChange($event)">

    <!-- Position Column -->
    <ng-container matColumnDef="id">
      <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by Id"> Id </th>
      <td mat-cell *matCellDef="let element"> {{element.id}}</td>
    </ng-container>

    <!-- Name Column -->
    <ng-container matColumnDef="firstName">
      <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by First Name"> First Name </th>
      <td mat-cell *matCellDef="let element"> {{element.firstName}} </td>
    </ng-container>

    <!-- Weight Column -->
    <ng-container matColumnDef="lastName">
      <th mat-header-cell *matHeaderCellDef  mat-sort-header sortActionDescription="Sort by Last Name"> Last Name </th>
      <td mat-cell *matCellDef="let element"> {{element.lastName}} </td>
    </ng-container>

    <!-- Symbol Column -->
    <ng-container matColumnDef="birthDate" >
      <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by Birthdate"> Birthdate </th>
      <td mat-cell *matCellDef="let element"> {{element.birthDate}} </td>
    </ng-container>

    <ng-container matColumnDef="activated" >
      <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by activated"> isActive </th>
      <td mat-cell *matCellDef="let element"> {{element.activated}} </td>
    </ng-container>


    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>

    <!-- Row shown when there is no matching data. -->
    <tr class="mat-row" *matNoDataRow>
      <td class="mat-cell" colspan="4">No data matching the filter "{{input.value}}"</td>
    </tr>
  </table>

  `,
  styles: [ `table{ width : 100%;}


  .mat-form-field {
    font-size: 14px;
    width: 100%;
  }
  `
  ]
})
export class UserTable implements OnInit {

  constructor(private userservice: UserService , private _liveAnnouncer: LiveAnnouncer) { }

  //dataSource: Observable<Costumers[]> = [];
  @ViewChild(MatSort) sort!: MatSort;
  userList :User[] = [];
  displayedColumns: string[] = [ 'id', 'firstName', 'lastName', 'birthDate', 'activated'];
  dataSource: any;

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.userservice.retrieveAll()
      .then(userList => this.userList = userList)
      .then(userList => { this.dataSource = new MatTableDataSource(userList)
        if (this.sort){this.dataSource.sort = this.sort}})
      .catch();
  }
  applyFilter(event: Event) {
   const filterValue = (event.target as HTMLInputElement).value;
   this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  announceSortChange(sortState: Sort) {
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
