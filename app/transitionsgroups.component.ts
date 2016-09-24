import {
  Component,
  Input,
  trigger,
  state,
  style,
  animate,
  transition,
  group
} from '@angular/core';

import { Marathons } from './marathon.service';

@Component({
  moduleId: module.id,
  selector: 'transitions-groups',
  template: `
    <ul class="transitionstyle">
      <li *ngFor="let marathon of marathons"
          [@flyInOut]="'in'">
        {{marathon.name}}
      </li>
    </ul>
  `,
  styleUrls: ['marathon-list.component.css'],
  styles: [`
    li {
      padding: 0 !important;
      text-align: center;
    }
  `],
  /* The element here always has the state "in" when it
   * is present. We animate two transitions: From void
   * to in and from in to void, to achieve an animated
   * enter and leave transition.
   *
   * The transitions have  *parallel group* that allow
   * animating several properties at the same time but
   * with different timing configurations. On enter
   * (void => *) we start the opacity animation 0.1s
   * earlier than the translation/width animation.
   * On leave (* => void) we do the opposite -
   * the translation/width animation begins immediately
   * and the opacity animation 0.1s later.
   */
  animations: [
    trigger('flyInOut', [
      state('in', style({width: 120, transform: 'translateX(200px)', opacity: 2})),
      transition('void => *', [
        style({width: 10, transform: 'translateX(150px)', opacity: 0}),
        group([
          animate('2.2s 0.3s ease', style({
            transform: 'translateX(0)',
            width: 120
          })),
          animate('3.3s ease', style({
            opacity: 1.5
          }))
        ])
      ]),
      transition('* => void', [
        group([
          animate('0.3s ease', style({
            transform: 'translateX(50px)',
            width: 10
          })),
          animate('0.3s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})
export class TransitionsGroupsComponent {
  @Input() marathons: Marathons;
}
