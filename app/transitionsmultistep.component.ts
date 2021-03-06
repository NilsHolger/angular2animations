import {
  Component,
  Input,
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  AnimationTransitionEvent
} from '@angular/core';

import { Marathons } from './marathon.service';

@Component({
  moduleId: module.id,
  selector: 'transitions-multistep',
  template: `
    <ul class="transitionstyle">
      <li *ngFor="let marathon of marathons"
          (@flyInOut.start)="animationStarted($event)"
          (@flyInOut.done)="animationDone($event)"
          [@flyInOut]="'in'">
        {{marathon.name}}
      </li>
    </ul>
  `,
  styleUrls: ['marathon-list.component.css'],
  /* The element here always has the state "in" when it
   * is present. We animate two transitions: From void
   * to in and from in to void, to achieve an animated
   * enter and leave transition. Each transition is
   * defined in terms of multiple keyframes, to give it
   * a bounce effect.
   */
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        animate(900, keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate(900, keyframes([
          style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
          style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
          style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
        ]))
      ])
    ])
  ]
})
export class TransitionsMultiStepComponent {
  @Input() marathons: Marathons;

  animationStarted(event: AnimationTransitionEvent) {
    console.warn('Animation started: ', event);
  }

  animationDone(event: AnimationTransitionEvent) {
    console.warn('Animation done: ', event);
  }
}