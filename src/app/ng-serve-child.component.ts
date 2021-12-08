import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-serve-child',
  template: `
    <ul>
      <li> The last addition to the list : {{lastEntry}}
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class NgServeChildComponent implements OnInit {

  @Input() lastEntry = '';


  constructor() { }

  ngOnInit(): void {
  }

}
