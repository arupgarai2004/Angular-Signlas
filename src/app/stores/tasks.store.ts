import {
    signalStore,
    withState,
    withComputed,
    withMethods,
    patchState
  } from '@ngrx/signals';
  import { computed } from '@angular/core';
  
  
  interface Task {
    id: number;
    title: string;
    completed: boolean;
  }
  
  //
  // Create a Signal Store for managing tasks (TodoStore)
  //
  export const TodoStore = signalStore(
  
   { providedIn: 'root' },
  
    // ✅ Initial state of the store
    withState<{ tasks: Task[] }>({
      tasks: []
    }),
  
    // ✅ Computed properties: derived state
    withComputed(({ tasks }) => ({
      
      completedTasks: computed(() =>
        tasks().filter(task => task.completed)
      ),
  
      // All incomplete tasks
      incompleteTasks: computed(() =>
        tasks().filter(task => !task.completed)
      )
    })),
  
    // ✅ Store methods for updating state
    withMethods((store) => ({
  
      // Add a new task with unique ID and default `completed: false`
      addTask(title: string) {
        patchState(store, {
          tasks: [
            ...store.tasks(),
            { id: Date.now(), title, completed: false }
          ]
        });
      },
  
      // Toggle the completed status of a task
      toggleTask(id: number) {
        patchState(store, {
          tasks: store.tasks().map(task =>
            task.id === id
              ? { ...task, completed: !task.completed }
              : task
          )
        });
      },
  
      // Remove a task by its ID
      removeTask(id: number) {
        patchState(store, {
          tasks: store.tasks().filter(task => task.id !== id)
        });
      }
  
    }))

  );
  