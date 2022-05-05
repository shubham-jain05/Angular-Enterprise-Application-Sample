import { Injectable } from "@angular/core";
import {
  ILoginToken,
  IUser,
  IClaim,
} from "src/core/models/authenctication/authenctication";

@Injectable({
  providedIn: "root",
})
export class JwtService {
  constructor() {}

  Parse(token: string): ILoginToken {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(window.atob(base64));
  }

  GetAllRoles(token: string): String[] {
    const parsed = this.Parse(token);

    if (
      !parsed ||
      !parsed["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] ||
      !parsed["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
        .length
    ) {
      return [];
    }
    if (
      !Array.isArray(
        parsed["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
      )
    ) {
      return [
        parsed["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],
      ];
    }

    return parsed[
      "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
    ];
  }

  GetModulePermissionMappedFromToken(token: string) {
    const roles = this.GetAllRoles(token);

    if (!roles || !roles.length) {
      return;
    }

    const merged = [].concat.apply([], roles.map(this.MapFromRole));
    return merged;
  }

  GetModulePermissionMappedFromUser(user: IUser) {
    const roles = user.claims.map((c) => c.value);

    if (!roles || !roles.length) {
      return;
    }

    const merged = [].concat.apply([], roles.map(this.MapFromRole));
    return merged;
  }

  GetModulePermissionMappedFromModule(user: any) {
    const roles = user.map((c) => c.value);

    if (!roles || !roles.length) {
      return;
    }

    const merged = [].concat.apply([], roles.map(this.MapFromRole));
    return merged;
  }

  GetModulePermissionMappedFromClaims(claims: Array<IClaim>) {
    const roles = claims.map((c) => c.value);

    if (!roles || !roles.length) {
      return;
    }

    const merged = [].concat.apply([], roles.map(this.MapFromRole));
    return merged;
  }

  MapFromRole(perm: string) {
    const perms = perm.split("|");
    const moduleName = perms[0];
    const mArray = [];
    if (!!perms[1]) {
      mArray.push(`${perms[1]}${moduleName.trim()}`);
    }
    if (!!perms[2]) {
      mArray.push(`${perms[2]}${moduleName.trim()}`);
    }
    if (!!perms[3]) {
      mArray.push(`${perms[3]}${moduleName.trim()}`);
    }
    if (!!perms[4]) {
      mArray.push(`${perms[4]}${moduleName.trim()}`);
    }
    if (!!perms[1] && !!perms[2] && !!perms[3] && !!perms[4]) {
      mArray.push(`All${moduleName}`);
    }
    return mArray;
  }
}
