import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ILogin } from 'src/core/models/authenctication/authenctication';
import { AuthenticationService } from 'src/core/services/authentication/authentication.service';
import { HelperService } from 'src/core/services/common/helper-service';
import { catchError } from 'rxjs/operators';
import { IGenericResponse } from 'src/core/models/common/IGenericResponse';
import { StorageService } from 'src/core/services/common/storage.service';
import { JwtService } from 'src/core/services/authentication/jwt.service';
import { AuthGaurdService } from 'src/core/services/authentication/auth-gaurd.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  model: ILogin = {
    email: '',
    password: '',
  };
  forgotPasswordMode = false;
  forgotPasswordEmail: string = '';
  isLoading: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly storage: StorageService
  ) {
    this.storage.clearAllValueFromStorage();
  }

  ngOnInit(): void {}

  RequestResetPassword() {}

  ShowForgotPassword(status: boolean) {
    this.forgotPasswordMode = status;
  }

  onLogin() {
    this.router.navigate(['Layout/admin/parent/Dashboard']);
  }
}
