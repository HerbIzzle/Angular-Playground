import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-prime-ng',
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
export class MaterialParent implements OnInit {

dataArray: string[] = ['test1' , 'test2', 'test3']

  constructor() { }

  ngOnInit() {

  }

}
