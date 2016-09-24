import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';

import { AppComponent} from './app.component';
import { TransitionsHostComponent } from './transitions-host.component';
import { TransitionsComponent } from './transitions.component';
import { TransitionsTwoWayHostComponent } from './transitionstwoway-host.component';
import { TransitionsTwoWayComponent } from './transitionstwoway.component';
import { TransitionsEnterLeaveHostComponent } from './transitionsenterleave-host.component';
import { TransitionsEnterLeaveComponent } from './transitionsenterleave.component';
import { TransitionsEnterLeaveStateHostComponent } from './transitionsenterleavestate-host.component';
import { TransitionsEnterLeaveStateComponent } from './transitionsenterleavestate.component';
import { TransitionsAutoHostComponent } from './transitionsauto-host.component';
import { TransitionsAutoComponent } from './transitionsauto.component';
import { TransitionsGroupsHostComponent } from './transitionsgroups-host.component';
import { TransitionsGroupsComponent } from './transitionsgroups.component';
import { TransitionsTimingsHostComponent } from './transitionstimings-host.component';
import { TransitionsTimingsComponent } from './transitionstimings.component';
import { TransitionsMultiStepHostComponent } from './transitionsmultistep-host.component';
import { TransitionsMultiStepComponent } from './transitionsmultistep.component';

@NgModule({
  imports: [ BrowserModule, routing ],
  declarations: [
    AppComponent,
    TransitionsHostComponent,
    TransitionsComponent,
    TransitionsTwoWayHostComponent,
    TransitionsTwoWayComponent,
    TransitionsEnterLeaveHostComponent,
    TransitionsEnterLeaveComponent,
    TransitionsEnterLeaveStateHostComponent,
    TransitionsEnterLeaveStateComponent,
    TransitionsAutoHostComponent,
    TransitionsAutoComponent,
    TransitionsGroupsHostComponent,
    TransitionsGroupsComponent,
    TransitionsTimingsHostComponent,
    TransitionsTimingsComponent,
    TransitionsMultiStepHostComponent,
    TransitionsMultiStepComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
