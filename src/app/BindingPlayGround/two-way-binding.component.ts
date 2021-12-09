import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `<div class="child">
    <p>
      This is a Two Way Key Up {{twoWayKeyUp}}
    </p>
  </div>
  `,
  styles: [
  ]
})
export class TwoWayBindingComponent implements OnInit {


  @Input() twoWayKeyUp = '';

  constructor() { }

  ngOnInit(): void {
  }

}
