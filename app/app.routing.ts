import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransitionsHostComponent }      from './transitions-host.component';
import { TransitionsTwoWayHostComponent }      from './transitionstwoway-host.component';
import { TransitionsEnterLeaveHostComponent }      from './transitionsenterleave-host.component';
import { TransitionsEnterLeaveStateHostComponent }      from './transitionsenterleavestate-host.component';
import { TransitionsAutoHostComponent }      from './transitionsauto-host.component';
import { TransitionsGroupsHostComponent }      from './transitionsgroups-host.component';
import { TransitionsTimingsHostComponent }      from './transitionstimings-host.component';
import { TransitionsMultiStepHostComponent }      from './transitionsmultistep-host.component';

const appRoutes: Routes = [
    {
        path: 'transitions',
        component: TransitionsHostComponent,
    },
    {
        path: 'transitionstwoway',
        component: TransitionsTwoWayHostComponent
    },
    {
        path: 'transitionsenterleave',
        component: TransitionsEnterLeaveHostComponent
    },
    {
        path: 'transitionsenterleavestate',
        component: TransitionsEnterLeaveStateHostComponent
    },
    {
        path: 'transitionsauto',
        component: TransitionsAutoHostComponent
    },
    {
        path: 'transitionsgroups',
        component: TransitionsGroupsHostComponent
    },
    {
        path: 'transitionstimings',
        component: TransitionsTimingsHostComponent
    },
    {
        path: 'transitionsmultistep',
        component: TransitionsMultiStepHostComponent
    },
    {
        path: '',
        redirectTo: '/transitions',
        pathMatch: 'full'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
