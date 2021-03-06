import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class HeaderConstant {
  authorization = "Authorization";
  brand = "x-brandid";
  request = "x-requestid";
  userAgent = "user-agent";
  userId = "x-userid";
  cartId = "x-cartid";
  userSessionId = "x-user-sessionid";
  searchSessionId = "x-search-sessionid";
  locale = "x-locale";
  userType = "x-usertype";
  agendId = "x-agentid";
  saleChannel = "x-sales-channel";
  channel = "x-channelid";
  actionNameBy = "x-actionnameby";
  actionBy = "x-actionby";
  constructor() {}
}
