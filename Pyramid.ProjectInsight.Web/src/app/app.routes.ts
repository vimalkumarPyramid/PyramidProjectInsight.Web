import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

// Route Configuration
export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'manage-user', component: LoginComponent, pathMatch: 'full' },
  { path: 'manage-projects', component: LoginComponent, pathMatch: 'full' },
  { path: 'manage-client', component: LoginComponent, pathMatch: 'full' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
