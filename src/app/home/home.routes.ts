import { ModuleWithProviders } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent, InitialPageComponent } from './index';

export const HomeRoutes: Route[] = [
  
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: InitialPageComponent

      }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(HomeRoutes);