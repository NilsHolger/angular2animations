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
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Angular 2 Animations';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <nav>\n    <a routerLink=\"/transitions\" routerLinkActive=\"active\">Transitions</a>\n    <a routerLink=\"/transitionstwoway\" routerLinkActive=\"active\">TransitionsTwoWay</a>\n    <a routerLink=\"/transitionsenterleave\" routerLinkActive=\"active\">TransitionsEnterLeave</a>\n    <a routerLink=\"/transitionsenterleavestate\" routerLinkActive=\"active\">TransitionsEnterLeaveState</a>\n    <a routerLink=\"/transitionsauto\" routerLinkActive=\"active\">TransitionsAuto</a>\n    <a routerLink=\"/transitionsgroups\" routerLinkActive=\"active\">TransitionsGroups</a>\n    <a routerLink=\"/transitionstimings\" routerLinkActive=\"active\">TransitionsTimings</a>\n    <a routerLink=\"/transitionsmultistep\" routerLinkActive=\"active\">TransitionsMultiStep</a>\n    </nav>\n   <router-outlet></router-outlet>\n   <footer class=\"footer\">Made with <span class=\"glyphicon glyphicon-heart\" aria-hidden=\"true\"></span> by Nils-Holger N\u00E4gele</footer>\n   <code class=\"bottom-left\">Code on Github <a href=\"https://github.com/NilsHolger/angular2animations.git\" target=\"_blank\">here</a></code>\n  ",
            styleUrls: ['app/app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map