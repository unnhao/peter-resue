import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { Tab3Component } from './tab3/tab3.component';
import { RouterModule, Routes, RouteReuseStrategy } from '@angular/router';
import { Page1Component } from './page1.component';
import { MaterialModule } from '../../material.module';
import { AppRoutingCache } from './app-routing-cache';

const paths: Routes = [
  {
    path: '',
    component: Page1Component,
    children: [
      {
        path: 'tab1',
        component: Tab1Component
      },
      {
        path: 'tab2',
        component: Tab2Component
      },
      {
        path: 'tab3',
        component: Tab3Component
      }
    ]
  }
];

@NgModule({
  declarations: [Tab1Component, Tab2Component, Tab3Component, Page1Component],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(paths)
  ],
  // providers: [{ provide: RouteReuseStrategy, useClass: AppRoutingCache }],
})
export class Page1Module { }
