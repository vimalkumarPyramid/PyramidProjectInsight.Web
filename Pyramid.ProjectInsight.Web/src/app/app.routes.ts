import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

// Route Configuration
export const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: '', component: HomeComponent, pathMatch: 'full' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
