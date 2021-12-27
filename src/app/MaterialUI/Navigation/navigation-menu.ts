import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'navigation-menu',
  template: `


      <mat-sidenav-container>
        <mat-sidenav #sidenav role="navigation">
          <app-sidenav-list></app-sidenav-list>
        </mat-sidenav>
        <mat-sidenav-content>
          <app-header (sidenavToggle)="sidenav.toggle()"></app-header>

              <router-outlet></router-outlet>

        </mat-sidenav-content>
      </mat-sidenav-container>
  `,
  styles: [
    `mat-sidenav-container, mat-sidenav-content, mat-sidenav {
      height: 100%;
    }

    mat-sidenav {
      width: 250px;
    }

    main {
      padding: 10px;
      background: green;
    }`
  ]
})
export class NavigationMenu implements OnInit {


  constructor() { }

  ngOnInit() {

  }

}
