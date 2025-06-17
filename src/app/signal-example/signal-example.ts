import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-example',
  imports: [],
  templateUrl: './signal-example.html',
  styleUrl: './signal-example.css',
  standalone: true
})
export class SignalExample {

  count= signal(0);

  increaseVal(){
    this.count.update(value=> value+1);
  }

}
