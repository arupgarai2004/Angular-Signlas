import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal-example',
  imports: [],
  templateUrl: './signal-example.html',
  styleUrl: './signal-example.css',
  standalone: true
})
export class SignalExample {

  count= signal(0);
  numberOne=signal(3);
  numberTwo=signal(5);

  increseVal(){
    this.count.update(value=> value+1);
    this.numberOne.update(value=> value + 5);
  }

   sumValue  = computed(() => this.numberOne() + this.numberTwo());

   ngOnInit(){
    effect(() => {
      console.log(this.numberOne());
      
    });
   }  

}
