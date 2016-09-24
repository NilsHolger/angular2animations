import {
  Component,
  Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

import { Marathons } from './marathon.service';

@Component({
 moduleId: module.id,
 selector: 'transitions-twoway',
 template: `
   <ul class="transitionstyle">
     <li *ngFor="let marathon of marathons"
         [@heroState]="marathon.state"
         (click)="marathon.toggleState()">
       {{marathon.name}}
     </li>
   </ul>
 `,
 styleUrls: ['marathon-list.component.css'],
 /*
  * Define two states, "inactive" and "active", and the end
  * styles that apply whenever the element is in those states.
  * Then define an animated transition between these two
  * states, in *both* directions.
  */
 animations: [
   trigger('heroState', [
     state('inactive', style({
       backgroundColor: '#eee',
       transform: 'scale(0.5)'
     })),
     state('active',   style({
       backgroundColor: '#cfd8dc',
       transform: 'scale(1.5)'
     })),
     transition('inactive <=> active', animate('100ms ease-out'))
   ])
 ]
})
export class TransitionsTwoWayComponent {
 @Input() marathons: Marathons;
}
