import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashbordRouting.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/core/utils/function/config-function';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts';
import { AgmCoreModule } from '@agm/core';
import { GoogleApiKey } from '../../core/utils/function/config-function';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxsModule } from '@ngxs/store';
import { NgxDataTableModule } from 'angular-9-datatable';
import { LrState } from './store/lr.state';
import { SaveDataComponent } from './save-data/save-data.component';
import { ReadDataComponent } from './read-data/read-data.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [DashboardComponent, SaveDataComponent, ReadDataComponent],
  imports: [
    CommonModule,
    FormsModule,
    GoogleChartsModule,
    NgSelectModule,
    ReactiveFormsModule,
    NgxDataTableModule,
    DashboardRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    AgmCoreModule.forRoot({
      apiKey: GoogleApiKey,
    }),
    NgxsModule.forRoot([LrState], { developmentMode: !environment.PRODUCTION }),
  ],
})
export class DashboardModule {}
