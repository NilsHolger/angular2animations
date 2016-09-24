import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
    <a routerLink="/transitions" routerLinkActive="active">Transitions</a>
    <a routerLink="/transitionstwoway" routerLinkActive="active">TransitionsTwoWay</a>
    <a routerLink="/transitionsenterleave" routerLinkActive="active">TransitionsEnterLeave</a>
    <a routerLink="/transitionsenterleavestate" routerLinkActive="active">TransitionsEnterLeaveState</a>
    <a routerLink="/transitionsauto" routerLinkActive="active">TransitionsAuto</a>
    <a routerLink="/transitionsgroups" routerLinkActive="active">TransitionsGroups</a>
    <a routerLink="/transitionstimings" routerLinkActive="active">TransitionsTimings</a>
    <a routerLink="/transitionsmultistep" routerLinkActive="active">TransitionsMultiStep</a>
    </nav>
   <router-outlet></router-outlet>
   <footer class="footer">Made with <span class="glyphicon glyphicon-heart" aria-hidden="true"></span> by Nils-Holger Nägele</footer>
   <code class="bottom-left">Code on Github <a href="https://github.com/NilsHolger/angular2animations.git" target="_blank">here</a></code>
  `,
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
  title = 'Angular 2 Animations';
}
