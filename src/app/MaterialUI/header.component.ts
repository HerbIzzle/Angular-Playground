import {Component, OnInit, Output, EventEmitter} from '@angular/core';


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

        <a [routerLink]="['usertable']" >Kundenverwaltung</a>

      </div>
      <div class="sexz">
        <ul class="navigation-items">
          <li>
            <a routerLink="usertable">Active Users</a>
          </li>
          <li>
            <a routerLink="/owner">All Users</a>
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

  constructor() {
  }

  ngOnInit(): void {
  }


  public onToggleSidenav() {
    this.sidenavToggle.emit();

  }


}
