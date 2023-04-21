import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent, UserSettingsComponent } from './user-index';

export const userModuleRoutes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'account', component: UserSettingsComponent },
]

@NgModule({
  declarations: [
    UserComponent,
    UserSettingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userModuleRoutes),
  ]
})
export class UserModule { }
