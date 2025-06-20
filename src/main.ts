import { Component, computed, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello from {{ name }} {{ count() }}! {{sumValue()}}</h1>
    <input type="button" (click)="increseVal()" value="Increse"/>
  `,
})
export class App {
  name = 'Angular';

  count= signal(0);
  numberOne=signal(3);
  numberTwo=signal(5);

  increseVal(){
    this.count.update(value=> value+1);
    this.numberOne.update(value=> value + 5);
  }

   sumValue  = computed(() => this.numberOne() + this.numberTwo());
  
  
}

bootstrapApplication(App);
