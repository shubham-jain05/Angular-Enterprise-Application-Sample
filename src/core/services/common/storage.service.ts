import { Injectable } from '@angular/core';
import { ILoginResponse } from 'src/core/models/authenctication/authenctication';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  setValueInLocalStorage(key: string, value: any) {
    let appendKey = 'admin.'.concat(key);
    let stringValue = JSON.stringify(value);
    localStorage.setItem(appendKey, stringValue);
  }

  getValueFromLocalStorage(key: string) {
    let appendKey = 'admin.'.concat(key);
    let parseValue = JSON.parse(localStorage.getItem(appendKey));
    return parseValue;
  }

  setValueInSessionStorage(key: string, value: any) {
    let appendKey = 'admin.'.concat(key);
    let stringValue = JSON.stringify(value);
    sessionStorage.setItem(appendKey, stringValue);
  }

  getValueFromSessionStorage(key: string) {
    let appendKey = 'admin.'.concat(key);
    let parseValue = JSON.parse(sessionStorage.getItem(appendKey));
    return parseValue;
  }

  clearAllValueFromStorage() {
    localStorage.clear();
    sessionStorage.clear();
  }

  clearValueFromLocalStorage(key: string) {
    let originKey = 'admin.'.concat(key);
    localStorage.removeItem(originKey);
  }

  clearValueFromSessionStorage(key: string) {
    let originKey = 'admin.'.concat(key);
    sessionStorage.removeItem(originKey);
  }
}
