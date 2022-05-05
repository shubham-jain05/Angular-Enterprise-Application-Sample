export interface IUsers {
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

export interface IUser {
  username: string;
  note: string;
  lng: any;
  lat: any;
}
