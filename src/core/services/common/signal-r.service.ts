import { EventEmitter, Injectable } from "@angular/core";
import { HubConnection, HubConnectionBuilder } from "@aspnet/signalr";
import { Config } from "../../../configs/api/apiConfiguration";
import { IMessage } from "../../models/common/IMessage";

@Injectable({
  providedIn: "root",
})
export class SingelRService {
  messageReceived = new EventEmitter<IMessage>();
  connectionEstablished = new EventEmitter<Boolean>();
  connectionIsEstablished = false;
  private _hubConnection: HubConnection;

  constructor(public config: Config) {
    this.createConnection();
    this.registerOnServerEvents();
    this.startConnection();
  }

  sendMessage(message: IMessage) {
    this._hubConnection.invoke("NewMessage", message);
  }

  createConnection() {
    this._hubConnection = new HubConnectionBuilder()
      .withUrl("https://3.6.237.150:8001/communicationHub")
      .build();
  }

  private startConnection(): void {
    this._hubConnection
      .start()
      .then(() => {
        this.connectionIsEstablished = true;
        this.connectionEstablished.emit(true);
      })
      .catch((err) => {
        setTimeout(function () {
          this.startConnection();
        }, 5000);
      });
  }

  private registerOnServerEvents(): void {
    this._hubConnection.on("ReceiveLougoutAllDevicesMessage", (data: any) => {
      this.messageReceived.emit(data);
    });
  }
}
