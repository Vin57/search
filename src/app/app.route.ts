import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UsersComponent } from './users/users.component';

const APP_ROUTES = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      { path: 'new', component: UserFormComponent, pathMatch: 'full' },
      { path: ':id/edit', component: UserFormComponent, pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: 'users' },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoute {}
