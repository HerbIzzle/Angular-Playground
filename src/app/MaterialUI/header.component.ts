import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddUserDialogComponent} from "./Material UI Components/UserDialog/add-user-dialog.component";


@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar color="primary">

      <div>
        <button mat-icon-button (click)="onToggleSidenav()">
          <mat-icon>menu</mat-icon>
        </button>
      </div>
      <div>

        <a [routerLink]="['usertable']" (click)="switchToIf()">Kundenverwaltung</a>

      </div>
      <div class="sexz">
        <ul class="navigation-items">
          <li>
            <button mat-button *ngIf="tableLoaded"
                    (click)="openDialog()"
                    (click)="addCostumer()"


            >Add User</button>
          </li>
        </ul>
      </div>
    </mat-toolbar>


  `,
  styles: [
    ` a {
      text-decoration: none;
      color: white;
      padding: 10px;
    }

    a:hover, a:active {
      color: lightgray;
    }

    .navigation-items {
      list-style-type: none;
      padding: 0;
      margin: 0;
      color: white;
      display: flex;
    }

    mat-toolbar {
      border-radius: 3px;
      display: flex;
      justify-content: space-between;
    }

    @media (max-width: 959px) {
      mat-toolbar {
        border-radius: 0px;
      }


    }
    `]
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();
  @Output() public select = new EventEmitter();

  tableLoaded = false;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  public onToggleSidenav() {
    this.sidenavToggle.emit();
  }
switchToIf(){
    this.tableLoaded = true;
  }


  openDialog() {
    this.dialog.open(AddUserDialogComponent);
  }

  addCostumer(){
    this.select.emit();
  }
}
