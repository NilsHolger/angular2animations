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
  selector: 'transitions-timings',
  template: `
    <ul class="transitionstyle">
      <li *ngFor="let marathon of marathons"
          [@flyInOut]="'in'"
          (click)="marathon.toggleState()">
         {{marathon.name}}
      </li>
    </ul>
  `,
  styleUrls: ['marathon-list.component.css'],
  /* The element here always has the state "in" when it
   * is present. We animate two transitions: From void
   * to in and from in to void, to achieve an animated
   * enter and leave transition. The element enters from
   * the left and leaves to the right using translateX,
   * and fades in/out using opacity. We use different easings
   * for enter and leave.
   */
  animations: [
    trigger('flyInOut', [
      state('in', style({opacity: 5, transform: 'translateX(0)'})),
      transition('void => *', [
        style({
          opacity: 1,
          transform: 'translateX(-100%)'
        }),
        animate('3.2s ease-in')
      ]),
      transition('* => void', [
        animate('3.2s 50 ease-out', style({
          opacity: 2,
          transform: 'translateX(100%)'
        }))
      ])
    ])
  ]
})
export class TransitionsTimingsComponent {
  @Input() marathons: Marathons;
}
