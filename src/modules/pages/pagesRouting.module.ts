import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGaurdService } from 'src/core/services/authentication/auth-gaurd.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { InternalServerErrorComponent } from './internal-server-error/internal-server-error.component';

const routes: Routes = [
  {
    path: 'PageNotFound',
    canActivate: [AuthGaurdService],
    component: PageNotFoundComponent,
  },
  {
    path: 'Unauthorized',
    canActivate: [AuthGaurdService],
    component: UnauthorizedComponent,
  },
  {
    path: 'InternalServer',
    canActivate: [AuthGaurdService],
    component: InternalServerErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
