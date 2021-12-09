import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-serve-child',
  template: `
    <div class="child">
    <ul>
      <li> The last addition to the list : {{lastEntry}}
      </li>
    </ul>
    <hr>
      <div>
        Key up from Child To Parent To Child : {{keyUpToChild}}
      </div>
    </div>
  `,
  styles: [
  ]
})
export class NgServeChildComponent implements OnInit {

  @Input() lastEntry = '';
  @Input() keyUpToChild ='';


  constructor() { }

  ngOnInit(): void {
  }

}
