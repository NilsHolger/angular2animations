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
  selector: 'transition-list-basic',
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
  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(8)'
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ])
  ]
})
export class TransitionsComponent {
  @Input() marathons: Marathons;
}