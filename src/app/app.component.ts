import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<h1> Angular Playground </h1>




<nav>
  <a [routerLink]="['dashboard' , 1 ]" >Dashboard</a>
  <a [routerLink]="['materialui']" >Material Ui</a>
  <a [routerLink]="[ 'bindingStuff' , 1 ]" >Binding Stuff</a>

</nav>

      <router-outlet ></router-outlet>

  `,
  styles: [

    `h1 {
    margin-bottom: 0;
      font-size: 2.5rem;
  }
  nav a {
    padding: 1rem;
    margin: 20px 20px;
    text-decoration: none;
    display: inline-block;
    background-color: #e8e8e8;
    color: #3d3d3d;
    border-radius: 4px;

  }
  nav a:hover {
    color: white;
    background-color: #42545C;
  }
  nav a.active {
    background-color: black;
  }`]
})
export class AppComponent {

}
