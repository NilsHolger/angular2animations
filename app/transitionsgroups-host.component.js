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
var TransitionsGroupsHostComponent = (function () {
    function TransitionsGroupsHostComponent(marathons) {
        this.marathons = marathons;
    }
    TransitionsGroupsHostComponent = __decorate([
        core_1.Component({
            selector: 'marathon-team-builder',
            template: "\n      <div class=\"buttons buttons-margin-top\">\n      <button [disabled]=\"!marathons.canAdd()\" (click)=\"marathons.addInactive()\">Add Inactive Animation</button>\n      <button [disabled]=\"!marathons.canAdd()\" (click)=\"marathons.addActive()\">Add Active Animation</button>\n      <button [disabled]=\"!marathons.canRemove()\" (click)=\"marathons.remove()\">Remove Animation</button>\n    </div>\n    <div class=\"columns buttons\">\n      <div class=\"column\">\n        <p>Click me</p>\n        <transitions-groups [marathons]=marathons></transitions-groups>\n      </div>\n    </div>\n  ",
            styles: ["\n    .buttons {\n      text-align: center;\n    }\n    button {\n      padding: 1.5em 3em;\n    }\n    .columns {\n      display: flex;\n      flex-direction: row;\n    }\n    .column {\n      flex: 1;\n      padding: 10px;\n    }\n    .column p {\n      min-height: 6em;\n    }\n  "],
            providers: [marathon_service_1.Marathons]
        }), 
        __metadata('design:paramtypes', [marathon_service_1.Marathons])
    ], TransitionsGroupsHostComponent);
    return TransitionsGroupsHostComponent;
}());
exports.TransitionsGroupsHostComponent = TransitionsGroupsHostComponent;
//# sourceMappingURL=transitionsgroups-host.component.js.map