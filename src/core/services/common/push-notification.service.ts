import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpService } from "../common/http-service";

const SERVER_URL = "http://localhost:3000/subscription";

@Injectable({
  providedIn: "root",
})
export class PushNotificationService {
  constructor(private http: HttpService) {}

  public sendSubscriptionToTheServer(subscription: PushSubscription) {
    return this.http.post<any, any>(SERVER_URL, subscription);
  }

  public getNewsLatter() {
    return this.http.get("http://localhost:3000/sendNotification");
  }

  requestPermission(): void {
    if ("Notification" in window) {
      Notification.requestPermission(function (status) {
        console.log("request permission on notification ->", status);
        return status;
      });
    }
  }
}
