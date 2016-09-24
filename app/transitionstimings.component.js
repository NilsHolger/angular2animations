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
var TransitionsTimingsComponent = (function () {
    function TransitionsTimingsComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', marathon_service_1.Marathons)
    ], TransitionsTimingsComponent.prototype, "marathons", void 0);
    TransitionsTimingsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'transitions-timings',
            template: "\n    <ul class=\"transitionstyle\">\n      <li *ngFor=\"let marathon of marathons\"\n          [@flyInOut]=\"'in'\"\n          (click)=\"marathon.toggleState()\">\n         {{marathon.name}}\n      </li>\n    </ul>\n  ",
            styleUrls: ['marathon-list.component.css'],
            /* The element here always has the state "in" when it
             * is present. We animate two transitions: From void
             * to in and from in to void, to achieve an animated
             * enter and leave transition. The element enters from
             * the left and leaves to the right using translateX,
             * and fades in/out using opacity. We use different easings
             * for enter and leave.
             */
            animations: [
                core_1.trigger('flyInOut', [
                    core_1.state('in', core_1.style({ opacity: 5, transform: 'translateX(0)' })),
                    core_1.transition('void => *', [
                        core_1.style({
                            opacity: 1,
                            transform: 'translateX(-100%)'
                        }),
                        core_1.animate('3.2s ease-in')
                    ]),
                    core_1.transition('* => void', [
                        core_1.animate('3.2s 50 ease-out', core_1.style({
                            opacity: 2,
                            transform: 'translateX(100%)'
                        }))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TransitionsTimingsComponent);
    return TransitionsTimingsComponent;
}());
exports.TransitionsTimingsComponent = TransitionsTimingsComponent;
//# sourceMappingURL=transitionstimings.component.js.map