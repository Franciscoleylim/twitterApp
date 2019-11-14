import {RouterModule, Routes} from '@angular/router';
import { Component } from '@angular/core';

const APP_ROUTES: Routes = [
   { path: 'routePath', component: Component},
   {path: '**', pathMatch: 'full', redirectTo: ''}
];

export const app_routing = RouterModule.forRoot(APP_ROUTES);