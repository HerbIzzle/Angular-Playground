import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-binding-play-ground',
  template: `

    <div class="parent">

    <h1>This is the parent component</h1>

    <h3>{{parentName}}</h3>
    <ul>
      <li *ngFor="let a of arrayOfThings">{{a}}
      </li>
    </ul>
    <hr>
    <div> Key Up : {{keyUp}}</div>
    <hr>

    <button (click)="removeFromList()">remove item</button>

    <app-child [name]="parentName"
               (listOfThings)="addSomething($event)"
               (deleteRequest)="removeWithChild()"
               (forKeyUp)="addKeyUp($event)"
    ></app-child>
    <app-ng-serve-child
      [lastEntry]="arrayOfThings[arrayOfThings.length -1]"
      [keyUpToChild]="keyUp"
    ></app-ng-serve-child>

    <app-two-way-binding></app-two-way-binding>

    </div>
  `,
  styles: [
  ]
})
export class BindingPlayGroundComponent{

  id?: number;

  constructor(route : ActivatedRoute) {
    this.id = route.snapshot.params.id;
  }

  parentName = "parent";
  keyUp ='';

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

  addKeyUp(child: string){
    this.keyUp = child;
  }

}
