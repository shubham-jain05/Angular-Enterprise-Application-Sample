import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { StorageService } from '../common/storage.service';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class AuthGaurdService implements CanActivate {
  constructor(private readonly storage: StorageService) {}

  SetPermission(permissions) {
    this.storage.setValueInLocalStorage('Permission', permissions);
  }

  GetPermission() {
    let key = this.storage.getValueFromLocalStorage('Permission');
    return key;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const PermissionList: Array<string> = this.GetPermission();
    if (!!PermissionList) {
      // let url = state.url.split('/');
      // let curroute = url[url.length - 1].replace('%20', ' ');
      // let searchKey = 'Read'.concat(curroute);
      // let FindPermission = PermissionList.includes(searchKey);
      // if (FindPermission) {
      //   return true;
      // } else {
      //   if (state.url === '/Layout/admin/parent/Dashboard') {
      //     return true;
      //   } else {
      //     return false;
      //   }
      // }
      return true;
    } else {
      // return false;
      return true;
    }
  }
}
