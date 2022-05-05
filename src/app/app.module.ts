import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpService } from 'src/core/services/common/http-service';
import { EnvServiceProvider } from 'src/environments/env.service.provider';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { headerInterceptor } from 'src/core/interceptors/headerInterceptor';
import { ErrorIntercept } from 'src/core/interceptors/errorInterceptors';
import { LoaderInterceptor } from 'src/core/interceptors/loaderInterceptor.service';
import { RouterModule } from '@angular/router';
import { AuthLazyLoadRoutes } from 'src/configs/lazy-load-routing/authLazyLoadRoutes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(AuthLazyLoadRoutes, { useHash: true, relativeLinkResolution: 'legacy' }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.PRODUCTION,
    }),
  ],
  providers: [
    HttpService,
    EnvServiceProvider,
    { provide: HTTP_INTERCEPTORS, useClass: headerInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorIntercept, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
