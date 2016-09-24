import { Component } from '@angular/core';

import { Marathons } from './marathon.service';

@Component({
  selector: 'marathon-team-builder',
  template: `
      <div class="buttons buttons-margin-top">
      <button [disabled]="!marathons.canAdd()" (click)="marathons.addInactive()">Add Inactive Animation</button>
      <button [disabled]="!marathons.canAdd()" (click)="marathons.addActive()">Add Active Animation</button>
      <button [disabled]="!marathons.canRemove()" (click)="marathons.remove()">Remove Animation</button>
    </div>
    <div class="columns buttons">
      <div class="column">
        <p>Click me</p>
        <transitions-groups [marathons]=marathons></transitions-groups>
      </div>
    </div>
  `,
  styles: [`
    .buttons {
      text-align: center;
    }
    button {
      padding: 1.5em 3em;
    }
    .columns {
      display: flex;
      flex-direction: row;
    }
    .column {
      flex: 1;
      padding: 10px;
    }
    .column p {
      min-height: 6em;
    }
  `],
  providers: [Marathons]
})
export class TransitionsGroupsHostComponent {
  constructor(private marathons: Marathons) { }
}