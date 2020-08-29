import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './addUser/adduser.component';

// Route Configuration
export const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'manage-user', component: AddUserComponent, pathMatch: 'full' },
  { path: 'manage-projects', component: LoginComponent, pathMatch: 'full' },
  { path: 'manage-client', component: LoginComponent, pathMatch: 'full' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
