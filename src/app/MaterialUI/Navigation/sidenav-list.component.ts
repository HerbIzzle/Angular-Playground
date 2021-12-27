import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  template: `
    <mat-nav-list>
      <a mat-list-item routerLink="/home" (click)="onSidenavClose()">
        <mat-icon>home</mat-icon> <span class="nav-caption">Home</span>
      </a>
      <a mat-list-item routerLink="/usertable" (click)="onSidenavClose()">
        <mat-icon>assignment_ind</mat-icon> <span class="nav-caption">Owner Actions</span>
      </a>
      <a mat-list-item routerLink="#" (click)="onSidenavClose()">
        <mat-icon>account_balance</mat-icon><span class="nav-caption">Account Actions</span>
      </a>
    </mat-nav-list>
    <mat-list-item [matMenuTriggerFor]="menu">
      <mat-icon>unfold_more</mat-icon>
      <a matline>Example</a>
    </mat-list-item>
    <mat-menu #menu="matMenu">
      <button mat-menu-item (click)="onSidenavClose()">View profile</button>
      <button mat-menu-item (click)="onSidenavClose()">Add contact</button>
    </mat-menu>
  `,
  styles: [`a{
    text-decoration: none;
    color: white;
  }

  a:hover, a:active{
    color: lightgray;
  }

  .nav-caption{
    display: inline-block;
    padding-left: 6px;
  }`
  ]
})
export class SidenavListComponent implements OnInit {


  @Output() sidenavClose = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onSidenavClose(){
    this.sidenavClose.emit();
  }


}
