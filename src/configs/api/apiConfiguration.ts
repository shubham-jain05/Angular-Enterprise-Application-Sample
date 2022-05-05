import { Injectable } from '@angular/core';
import { EnvService } from 'src/environments/env.service';

@Injectable({
  providedIn: 'root',
})
export class Config {
  constructor(private readonly env: EnvService) {}
  private readonly baseUrl = this.env.API_URL;
  AppUrl = this.baseUrl;
  TestApi = this.AppUrl.concat('/test');
}
