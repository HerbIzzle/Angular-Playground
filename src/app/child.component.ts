import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div class ='child'>
    <p>
     this child recieves info from its {{name}}
    <form>
      <label for="test">add a child to parent</label>
      <input
            id="test"
            name="test"
            #htmlInputElement
            (keyup)="keyUpToChild(htmlInputElement.value)"
          >
        <button

          type="button"
          (click)="addToParent(htmlInputElement.value)"

        >add me</button>

      <button (click)="delete()"

      >Delete item with an Output!</button>
    </form>
 <hr>

    </div>
  `,
  styles: [''
  ]
})
export class ChildComponent implements OnInit {

@Input() name = '';
@Output() listOfThings = new EventEmitter<string>();
  @Output() deleteRequest = new EventEmitter();
  @Output() forKeyUp = new EventEmitter<string>();

  refresh :string = '';

addToParent(name: string){
  this.listOfThings.emit(name);
}

keyUpToChild(keyUp: string){
  this.forKeyUp.emit(keyUp)

}

delete(){
  this.deleteRequest.emit();

}

  constructor() { }

  ngOnInit(): void {
  }

}
