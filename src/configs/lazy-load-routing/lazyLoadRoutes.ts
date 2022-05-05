import { Routes } from '@angular/router';
import { LayoutComponent } from 'src/modules/app-layout/layout/layout.component';
import { AuthGaurdService } from 'src/core/services/authentication/auth-gaurd.service';
export const LazyLoadRoutes: Routes = [
  {
    path: 'admin',
    component: LayoutComponent,
    canActivate: [AuthGaurdService],
    children: [
      {
        path: 'parent',
        loadChildren: () =>
          import('src/modules/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'parent',
        loadChildren: () =>
          import('src/modules/pages/pages.module').then((m) => m.PagesModule),
      },
    ],
  },
];
