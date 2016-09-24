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
var marathon_service_1 = require('./marathon.service');
var TransitionsEnterLeaveStateComponent = (function () {
    function TransitionsEnterLeaveStateComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', marathon_service_1.Marathons)
    ], TransitionsEnterLeaveStateComponent.prototype, "marathons", void 0);
    TransitionsEnterLeaveStateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'transitions-enter-leave-state',
            template: "\n    <ul class=\"transitionstyle\">\n      <li *ngFor=\"let marathon of marathons\"\n          [@flyInOut]=\"'in'\">\n        {{marathon.name}}\n      </li>\n    </ul>\n  ",
            styleUrls: ['marathon-list.component.css'],
            /* The element here always has the state "in" when it
             * is present. We animate two transitions: From void
             * to in and from in to void, to achieve an animated
             * enter and leave transition. The element enters from
             * the left and leaves to the right using translateX.
             */
            animations: [
                core_1.trigger('flyInOut', [
                    core_1.state('in', core_1.style({ transform: 'translateX(0)' })),
                    core_1.transition('void => *', [
                        core_1.style({ transform: 'translateX(-500%)' }),
                        core_1.animate(10000)
                    ]),
                    core_1.transition('* => void', [
                        core_1.animate(5000, core_1.style({ transform: 'translateX(500%)' }))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TransitionsEnterLeaveStateComponent);
    return TransitionsEnterLeaveStateComponent;
}());
exports.TransitionsEnterLeaveStateComponent = TransitionsEnterLeaveStateComponent;
//# sourceMappingURL=transitionsenterleavestate.component.js.map