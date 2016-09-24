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
  selector: 'transitions-enter-leave',
  template: `
    <ul class="transitionstyle">
      <li *ngFor="let marathon of marathons"
          [@flyInOut]="'in'">
        {{marathon.name}}
      </li>
    </ul>
  `,
  styleUrls: ['marathon-list.component.css'],
  /* The element here always has the state "in" when it
   * is present. We animate two transitions: From void
   * to in and from in to void, to achieve an animated
   * enter and leave transition. The element enters from
   * the left and leaves to the right using translateX.
   */
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-500%)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(500%)'}))
      ])
    ])
  ]
})
export class TransitionsEnterLeaveComponent {
  @Input() marathons: Marathons;
}
