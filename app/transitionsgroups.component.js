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
var TransitionsGroupsComponent = (function () {
    function TransitionsGroupsComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', marathon_service_1.Marathons)
    ], TransitionsGroupsComponent.prototype, "marathons", void 0);
    TransitionsGroupsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'transitions-groups',
            template: "\n    <ul class=\"transitionstyle\">\n      <li *ngFor=\"let marathon of marathons\"\n          [@flyInOut]=\"'in'\">\n        {{marathon.name}}\n      </li>\n    </ul>\n  ",
            styleUrls: ['marathon-list.component.css'],
            styles: ["\n    li {\n      padding: 0 !important;\n      text-align: center;\n    }\n  "],
            /* The element here always has the state "in" when it
             * is present. We animate two transitions: From void
             * to in and from in to void, to achieve an animated
             * enter and leave transition.
             *
             * The transitions have  *parallel group* that allow
             * animating several properties at the same time but
             * with different timing configurations. On enter
             * (void => *) we start the opacity animation 0.1s
             * earlier than the translation/width animation.
             * On leave (* => void) we do the opposite -
             * the translation/width animation begins immediately
             * and the opacity animation 0.1s later.
             */
            animations: [
                core_1.trigger('flyInOut', [
                    core_1.state('in', core_1.style({ width: 120, transform: 'translateX(200px)', opacity: 2 })),
                    core_1.transition('void => *', [
                        core_1.style({ width: 10, transform: 'translateX(150px)', opacity: 0 }),
                        core_1.group([
                            core_1.animate('2.2s 0.3s ease', core_1.style({
                                transform: 'translateX(0)',
                                width: 120
                            })),
                            core_1.animate('3.3s ease', core_1.style({
                                opacity: 1.5
                            }))
                        ])
                    ]),
                    core_1.transition('* => void', [
                        core_1.group([
                            core_1.animate('0.3s ease', core_1.style({
                                transform: 'translateX(50px)',
                                width: 10
                            })),
                            core_1.animate('0.3s 0.2s ease', core_1.style({
                                opacity: 0
                            }))
                        ])
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TransitionsGroupsComponent);
    return TransitionsGroupsComponent;
}());
exports.TransitionsGroupsComponent = TransitionsGroupsComponent;
//# sourceMappingURL=transitionsgroups.component.js.map