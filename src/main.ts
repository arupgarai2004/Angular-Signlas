import { Component, computed, signal, effect } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, provideRouter } from '@angular/router';
import { routes } from './app/app-routing-module';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  template: ` 
    <nav>
    <a routerLink="/signal">Go to Signal</a>
     | 
    <a routerLink="/signal-store">Signal Store</a>
    </nav>
    <router-outlet>Test</router-outlet>

  `,
})
export class App {
  name = 'Angular';

  
  
}

bootstrapApplication(App, {
  providers: [provideRouter(routes)]
});
