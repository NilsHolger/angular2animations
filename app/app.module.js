"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_routing_1 = require('./app.routing');
var app_component_1 = require('./app.component');
var transitions_host_component_1 = require('./transitions-host.component');
var transitions_component_1 = require('./transitions.component');
var transitionstwoway_host_component_1 = require('./transitionstwoway-host.component');
var transitionstwoway_component_1 = require('./transitionstwoway.component');
var transitionsenterleave_host_component_1 = require('./transitionsenterleave-host.component');
var transitionsenterleave_component_1 = require('./transitionsenterleave.component');
var transitionsenterleavestate_host_component_1 = require('./transitionsenterleavestate-host.component');
var transitionsenterleavestate_component_1 = require('./transitionsenterleavestate.component');
var transitionsauto_host_component_1 = require('./transitionsauto-host.component');
var transitionsauto_component_1 = require('./transitionsauto.component');
var transitionsgroups_host_component_1 = require('./transitionsgroups-host.component');
var transitionsgroups_component_1 = require('./transitionsgroups.component');
var transitionstimings_host_component_1 = require('./transitionstimings-host.component');
var transitionstimings_component_1 = require('./transitionstimings.component');
var transitionsmultistep_host_component_1 = require('./transitionsmultistep-host.component');
var transitionsmultistep_component_1 = require('./transitionsmultistep.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routing_1.routing],
            declarations: [
                app_component_1.AppComponent,
                transitions_host_component_1.TransitionsHostComponent,
                transitions_component_1.TransitionsComponent,
                transitionstwoway_host_component_1.TransitionsTwoWayHostComponent,
                transitionstwoway_component_1.TransitionsTwoWayComponent,
                transitionsenterleave_host_component_1.TransitionsEnterLeaveHostComponent,
                transitionsenterleave_component_1.TransitionsEnterLeaveComponent,
                transitionsenterleavestate_host_component_1.TransitionsEnterLeaveStateHostComponent,
                transitionsenterleavestate_component_1.TransitionsEnterLeaveStateComponent,
                transitionsauto_host_component_1.TransitionsAutoHostComponent,
                transitionsauto_component_1.TransitionsAutoComponent,
                transitionsgroups_host_component_1.TransitionsGroupsHostComponent,
                transitionsgroups_component_1.TransitionsGroupsComponent,
                transitionstimings_host_component_1.TransitionsTimingsHostComponent,
                transitionstimings_component_1.TransitionsTimingsComponent,
                transitionsmultistep_host_component_1.TransitionsMultiStepHostComponent,
                transitionsmultistep_component_1.TransitionsMultiStepComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map