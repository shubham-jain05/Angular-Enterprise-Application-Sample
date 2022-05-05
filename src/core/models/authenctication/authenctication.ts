export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginResponse {
  expiry?: string;
  expiryString?: string;
  token?: string;
  RememerMeToken?: string;
}

export interface ILoginToken {
  iss?: string;
  Email?: string;
  UserId?: string;
  jti?: string;
  iat?: number;
  UserType?: string;
  Countries: any;
  Brands: any;
  TokenId?: string;
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"?: any;
  nbf?: number;
  exp?: number;
  aud?: string;
}

export interface IRegister {
  userId: number;
  activationToken: string;
  password: string;
  confirmPassword: string;
  code: string;
}

export interface IRecover {
  userId: number;
  password: string;
  confirmPassword: string;
  code: string;
}

export interface IRegisterResponse {
  sharedKey: string;
  authenticatorUri: string;
}

export interface IRegisterUserInfo {
  fullName: string;
  email: string;
}

export interface IResetPassword {
  email: string;
  adminURL: string;
}
export interface ITwoFactorPayload {
  code: any;
  UseTwoFactorCode: any;
}

export interface TwoFactorCodesInfoViewModel {
  rememberMeToken?: string;
  recoveryCodes?: Array<string>;
  codeGenerateDate: Date;
  email?: string;
  firstName?: string;
}

export interface IZendeskLogin {
  id: number;
  isChat: boolean;
}

export class IUser {
  id: number;
  firstName?: string;
  lastName?: string;
  userName?: string;
  email?: string;
  userType?: string;
  languageCode?: any;
  currencyCode?: any;
  communicationLanguage?: any;
  phoneNumber?: string;
  claims: Array<IClaim>;
}

export interface IClaim {
  issuer: string;
  originalIssuer: string;
  properties: any;
  subject?: any;
  type: string;
  value: string;
  valueType: string;
}
