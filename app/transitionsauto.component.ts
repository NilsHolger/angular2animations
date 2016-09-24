import {
  Component,
  Input,
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/core';

import { Marathons } from './marathon.service';

@Component({
  moduleId: module.id,
  selector: 'transitions-auto',
  template: `
    <ul class="transitionstyle">
      <li *ngFor="let marathon of marathons" class="auto-size"
          [@shrinkOut]="'in'">
        {{marathon.name}}
      </li>
    </ul>
  `,
  styleUrls: ['marathon-list.component.css'],

  /* When the element leaves (transition "in => void" occurs),
   * get the element's current computed height and animate
   * it down to 0.
   */
  animations: [
    trigger('shrinkOut', [
      state('in', style({height: '*'})),
      transition('* => void', [
        style({height: '*'}),
        animate(5000, style({height: 0}))
      ])
    ])
  ]
})
export class TransitionsAutoComponent {
  @Input() marathons: Marathons;
}
