import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { InternalServerErrorComponent } from './internal-server-error/internal-server-error.component';
import { PagesRoutingModule } from './pagesRouting.module';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    UnauthorizedComponent,
    InternalServerErrorComponent,
  ],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
