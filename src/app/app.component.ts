import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="parent">

      <h1>This is the parent component</h1>

      <h3>{{parentName}}</h3>
      <ul>
        <li *ngFor="let a of arrayOfThings">{{a}}
        </li>
      </ul>

      <button (click)="removeFromList()">remove item</button>

      <app-child [name]="parentName"
                 (listOfThings)="addSomething($event)"
                 (deleteRequest)="removeWithChild()"
      ></app-child>
      <app-ng-serve-child [lastEntry]="arrayOfThings[arrayOfThings.length -1]"></app-ng-serve-child>


    </div>
  `,
  styles: []
})
export class AppComponent {
  parentName = "parent";

  arrayOfThings = ['some string', 'another strong', 'last string i promisse'];

  addSomething(childThings: string){
  this.arrayOfThings.push(childThings);
}

  removeFromList(){
    this.arrayOfThings.pop();
  }

  removeWithChild(){
    this.arrayOfThings.pop();
  }
}
