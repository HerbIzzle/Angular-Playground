import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-prime-ng',
  template: `


      <mat-sidenav-container>
        <mat-sidenav #sidenav role="navigation">
          this is a place for us to add side-nav code
        </mat-sidenav>
        <mat-sidenav-content>
          <app-header (sidenavToggle)="sidenav.toggle()"></app-header>
          <main>
            <router-outlet></router-outlet>
          </main>
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
    }`
  ]
})
export class MaterialUiComponent implements OnInit {

dataArray: string[] = ['test1' , 'test2', 'test3']

  constructor() { }

  ngOnInit() {

  }

}
