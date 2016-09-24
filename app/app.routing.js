"use strict";
var router_1 = require('@angular/router');
var transitions_host_component_1 = require('./transitions-host.component');
var transitionstwoway_host_component_1 = require('./transitionstwoway-host.component');
var transitionsenterleave_host_component_1 = require('./transitionsenterleave-host.component');
var transitionsenterleavestate_host_component_1 = require('./transitionsenterleavestate-host.component');
var transitionsauto_host_component_1 = require('./transitionsauto-host.component');
var transitionsgroups_host_component_1 = require('./transitionsgroups-host.component');
var transitionstimings_host_component_1 = require('./transitionstimings-host.component');
var transitionsmultistep_host_component_1 = require('./transitionsmultistep-host.component');
var appRoutes = [
    {
        path: 'transitions',
        component: transitions_host_component_1.TransitionsHostComponent,
    },
    {
        path: 'transitionstwoway',
        component: transitionstwoway_host_component_1.TransitionsTwoWayHostComponent
    },
    {
        path: 'transitionsenterleave',
        component: transitionsenterleave_host_component_1.TransitionsEnterLeaveHostComponent
    },
    {
        path: 'transitionsenterleavestate',
        component: transitionsenterleavestate_host_component_1.TransitionsEnterLeaveStateHostComponent
    },
    {
        path: 'transitionsauto',
        component: transitionsauto_host_component_1.TransitionsAutoHostComponent
    },
    {
        path: 'transitionsgroups',
        component: transitionsgroups_host_component_1.TransitionsGroupsHostComponent
    },
    {
        path: 'transitionstimings',
        component: transitionstimings_host_component_1.TransitionsTimingsHostComponent
    },
    {
        path: 'transitionsmultistep',
        component: transitionsmultistep_host_component_1.TransitionsMultiStepHostComponent
    },
    {
        path: '',
        redirectTo: '/transitions',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map