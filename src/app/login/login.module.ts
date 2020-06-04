import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material.module';
import { RouterModule, Routes } from '@angular/router';

const paths: Routes = [
 {
   path: '',
   component: LoginComponent
 }
]
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(paths)
  ]
})
export class LoginModule { }
