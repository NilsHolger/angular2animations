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
var TransitionsAutoComponent = (function () {
    function TransitionsAutoComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', marathon_service_1.Marathons)
    ], TransitionsAutoComponent.prototype, "marathons", void 0);
    TransitionsAutoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'transitions-auto',
            template: "\n    <ul class=\"transitionstyle\">\n      <li *ngFor=\"let marathon of marathons\" class=\"auto-size\"\n          [@shrinkOut]=\"'in'\">\n        {{marathon.name}}\n      </li>\n    </ul>\n  ",
            styleUrls: ['marathon-list.component.css'],
            /* When the element leaves (transition "in => void" occurs),
             * get the element's current computed height and animate
             * it down to 0.
             */
            animations: [
                core_1.trigger('shrinkOut', [
                    core_1.state('in', core_1.style({ height: '*' })),
                    core_1.transition('* => void', [
                        core_1.style({ height: '*' }),
                        core_1.animate(5000, core_1.style({ height: 0 }))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TransitionsAutoComponent);
    return TransitionsAutoComponent;
}());
exports.TransitionsAutoComponent = TransitionsAutoComponent;
//# sourceMappingURL=transitionsauto.component.js.map