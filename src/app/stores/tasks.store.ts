import {
    signalStore,
    withState,
    withComputed,
    withMethods,
    patchState
  } from '@ngrx/signals';
  import { computed, Injectable } from '@angular/core';
  
  export interface Task {
    id: number;
    title: string;
    completed: boolean;
  }
  
  export interface TodoState {
    tasks: Task[];
  }
  
  export const TodoStore = signalStore(
    { providedIn: 'root' },
    withState<TodoState>({ tasks: [] }),
  
    withComputed(({ tasks }) => ({
      completedTasks: computed(() =>
        tasks().filter((task: Task) => task.completed)
      ),
      incompleteTasks: computed(() =>
        tasks().filter((task: Task) => !task.completed)
      )
    })),
  
    withMethods((store) => ({
      addTask(title: string) {
        patchState(store, {
          tasks: [
            ...store.tasks(),
            { id: Date.now(), title, completed: false }
          ]
        });
      },
      toggleTask(id: number) {
        patchState(store, {
          tasks: store.tasks().map((task: Task) =>
            task.id === id
              ? { ...task, completed: !task.completed }
              : task
          )
        });
      },
      removeTask(id: number) {
        patchState(store, {
          tasks: store.tasks().filter((task: Task) => task.id !== id)
        });
      }
    }))
  );
  
  // 👇 Export a type for better typing in components
  export type TodoStoreType = ReturnType<typeof TodoStore>;
  