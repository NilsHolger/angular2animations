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
var TransitionsComponent = (function () {
    function TransitionsComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', marathon_service_1.Marathons)
    ], TransitionsComponent.prototype, "marathons", void 0);
    TransitionsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'transition-list-basic',
            template: "\n    <ul class=\"transitionstyle\">\n      <li *ngFor=\"let marathon of marathons\"\n          [@heroState]=\"marathon.state\"\n          (click)=\"marathon.toggleState()\">\n        {{marathon.name}}\n      </li>\n    </ul>\n  ",
            styleUrls: ['marathon-list.component.css'],
            animations: [
                core_1.trigger('heroState', [
                    core_1.state('inactive', core_1.style({
                        backgroundColor: '#eee',
                        transform: 'scale(1)'
                    })),
                    core_1.state('active', core_1.style({
                        backgroundColor: '#cfd8dc',
                        transform: 'scale(8)'
                    })),
                    core_1.transition('inactive => active', core_1.animate('500ms ease-in')),
                    core_1.transition('active => inactive', core_1.animate('500ms ease-out'))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TransitionsComponent);
    return TransitionsComponent;
}());
exports.TransitionsComponent = TransitionsComponent;
//# sourceMappingURL=transitions.component.js.map