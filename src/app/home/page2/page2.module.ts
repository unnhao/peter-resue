import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab11Component } from './tab1/tab1.component';
import { Tab22Component } from './tab2/tab2.component';
import { Tab3Component } from './tab3/tab3.component';
import { RouterModule, Routes, RouteReuseStrategy } from '@angular/router';
import { Page2Component } from './page2.component';
import { MaterialModule } from '../../material.module';


const paths: Routes = [
  {
    path: '',
    component: Page2Component,
    children: [
      {
        path: 'tab1',
        component: Tab11Component
      },
      {
        path: 'tab2',
        component: Tab22Component
      },
      {
        path: 'tab3',
        component: Tab3Component
      }
    ]
  }
];

@NgModule({
  declarations: [Tab11Component, Tab22Component, Tab3Component, Page2Component],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(paths)
  ],
  // providers: [{ provide: RouteReuseStrategy, useClass: AppRoutingCache }],
})
export class Page2Module { }
