import { Routes } from '@angular/router';
import { AuthGaurdService } from 'src/core/services/authentication/auth-gaurd.service';
export const AuthLazyLoadRoutes: Routes = [
  {
    path: '',
    redirectTo: 'authentication',
    pathMatch: 'full',
  },
  {
    path: 'authentication',
    loadChildren: () =>
      import('src/modules/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: 'Layout',
    canActivate: [AuthGaurdService],
    loadChildren: () =>
      import('src/modules/app-layout/applayout.module').then(
        (m) => m.AppLayoutModule
      ),
  },
  {
    path: '**',
    redirectTo: 'authentication/Login',
  },
];
