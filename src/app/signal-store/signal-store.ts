import { Component, inject } from '@angular/core';
import { TodoStore, TodoStoreType } from '../stores/tasks.store';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-signal-store',
  standalone: true,
  imports: [NgFor],
  templateUrl: './signal-store.html',
  styleUrl: './signal-store.css'
})
export class SignalStore {

  todoStore: TodoStoreType = inject(TodoStore);


}
