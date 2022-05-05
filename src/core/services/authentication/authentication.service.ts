import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ILogin,
  ILoginResponse,
  IRegisterUserInfo,
  IRegister,
  IRegisterResponse,
  IRecover,
  TwoFactorCodesInfoViewModel,
  ITwoFactorPayload,
  IResetPassword,
  IZendeskLogin,
  IUser,
  IClaim,
} from 'src/core/models/authenctication/authenctication';
import { IGenericResponse } from 'src/core/models/common/IGenericResponse';
import { Config } from 'src/configs/api/apiConfiguration';
import { HttpService } from 'src/core/services/common/http-service';
import { EnvService } from 'src/environments/env.service';
import { JwtService } from './jwt.service';
import { StorageService } from '../common/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private readonly http: HttpService,
    private readonly config: Config,
    private readonly env: EnvService,
    private readonly storage: StorageService,
    private readonly jwtservice: JwtService
  ) {}

  Login(model: ILogin): Observable<IGenericResponse<ILoginResponse>> {
    return this.http.post<ILogin, IGenericResponse<ILoginResponse>>(
      this.config.TestApi.concat('auth/Account/Login'),
      model
    );
  }

  Login2fa(
    code: string,
    token: string,
    UseTwoFactorCode
  ): Observable<IGenericResponse<ILoginResponse>> {
    const headers = {
      authorization: 'bearer '.concat(token),
    };

    let twoFactorPayload: ITwoFactorPayload = {
      code: code,
      UseTwoFactorCode: UseTwoFactorCode,
    };
    return this.http.post<ITwoFactorPayload, IGenericResponse<ILoginResponse>>(
      this.config.TestApi.concat('auth/Account/Login2fa'),
      twoFactorPayload,
      headers
    );
  }

  GetUserInfo(
    userId: number,
    activationToken: string,
    tokenType: string
  ): Observable<IGenericResponse<IRegisterUserInfo>> {
    return this.http.post(
      this.config.TestApi.concat('auth/Account/GetUserInfoFromToken'),
      { userId, activationToken, tokenType }
    );
  }

  Register(model: IRegister): Observable<IGenericResponse<IRegisterResponse>> {
    return this.http.post(
      this.config.TestApi.concat('auth/Account/ConfirmUserEmail'),
      model
    );
  }

  Recover(model: IRecover): Observable<IGenericResponse<IRegisterResponse>> {
    return this.http.post(
      this.config.TestApi.concat('auth/Account/CreateNewPasswordCommand'),
      model
    );
  }

  ResetPasswordRequest(
    email: string
  ): Observable<IGenericResponse<IRegisterResponse>> {
    let resetPassword: IResetPassword = {
      email: email,
      adminURL: this.env.API_URL_MASK,
    };
    return this.http.post<IResetPassword, IGenericResponse<IRegisterResponse>>(
      this.config.TestApi.concat('auth/Account/SendPasswordResetToken'),
      resetPassword
    );
  }

  Register2fa(
    model: IRegister
  ): Observable<IGenericResponse<TwoFactorCodesInfoViewModel>> {
    return this.http.post<
      IRegister,
      IGenericResponse<TwoFactorCodesInfoViewModel>
    >(
      this.config.TestApi.concat('auth/Account/ConfirmUserEmailWith2FA'),
      model
    );
  }

  RenewToken(): Observable<IGenericResponse<ILoginResponse>> {
    return this.http.post<any, IGenericResponse<ILoginResponse>>(
      this.config.TestApi.concat('auth/Account/RenewToken'),
      {}
    );
  }

  zendeskLogin(models: IZendeskLogin) {
    return this.http.post<IZendeskLogin, IGenericResponse<any>>(
      this.config.TestApi.concat('auth/Account/ZendeskSingleSignOn'),
      models
    );
  }

  GetUserProfile(brandId: string): Observable<IGenericResponse<IUser>> {
    return this.http.get<IGenericResponse<IUser>>(
      this.config.TestApi.concat(`auth/profile/GetUserProfile/${brandId}`)
    );
  }

  GetUserBrandClaims(
    brandId: string
  ): Observable<IGenericResponse<Array<IClaim>>> {
    return this.http.get<IGenericResponse<IUser>>(
      this.config.TestApi.concat(`auth/profile/GetUserBrandClaims/${brandId}`)
    );
  }
}
