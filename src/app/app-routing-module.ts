import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignalExample } from './signal-example/signal-example';


export const routes: Routes = [
  { path: 'signal', component: SignalExample },
  {
    path: 'signal-store',
    loadComponent: () => import('./signal-store/signal-store').then(m => m.SignalStore)
  }
];


