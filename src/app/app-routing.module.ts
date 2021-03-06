import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    // pathMatch: 'full'/
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      // {
      //   path: 'login',
      //   loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
      // },
      {
        path: 'page1',
        loadChildren: () => import('./home/page1/page1.module').then(m => m.Page1Module),
        // pathMatch: 'full'
      },
      {
        path: 'page2',
        loadChildren: () => import('./home/page2/page2.module').then(m => m.Page2Module),
        // pathMatch: 'full'
      },
      {
        path: 'page3',
        loadChildren: () => import('./home/page3/page3.module').then(m => m.Page3Module),
        // pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
