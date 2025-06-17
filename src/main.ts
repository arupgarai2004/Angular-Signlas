import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello from {{ name }} {{ count() }}!</h1>
    <input type="button" (click)="increseVal()" value="Increse"/>
  `,
})
export class App {
  name = 'Angular';

  count= signal(0);

  increseVal(){
    this.count.update(value=> value+1);
  }
}

bootstrapApplication(App);
