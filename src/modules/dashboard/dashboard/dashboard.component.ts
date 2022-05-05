import { Component, OnInit } from '@angular/core';
import { EnvService } from 'src/environments/env.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  title = '';
  type = 'AreaChart';
  data = [
    ['2017', 1000, 400],
    ['2018', -1170, 460],
    ['2019', 660, 1120],
    ['2020', 1030, 540],
  ];
  columnNames = ['Year', 'Sales', 'Expenses'];
  options = {};
  width = 500;
  height = 200;

  title2 = 'Browser market shares at a specific website, 2020';
  type2 = 'PieChart';
  data2 = [
    ['Firefox', 45.0],
    ['IE', 26.8],
    ['Chrome', 12.8],
    ['Safari', 8.5],
    ['Opera', 6.2],
    ['Others', 0.7],
  ];
  columnNames2 = ['Browser', 'Percentage'];
  lang = [
    { label: 'English', value: 'en-US' },
    { label: 'Arabic', value: 'ar-SA' },
  ];

  constructor(
    public env: EnvService,
    private readonly translate: TranslateService
  ) {
    this.translate.setDefaultLang('en-US');
  }

  ngOnInit(): void {}

  onChangeLanguage(type: string) {
    if (!!type) {
      this.translate.use(type);
    }
  }
}
