import { Injectable } from "@angular/core";
import { IGenericResponse } from "../../models/common/IGenericResponse";
import { Config } from "../../../configs/api/apiConfiguration";
import { HttpService } from "../common/http-service";
import { IFileUploadModel } from "../../models/common/IFileUploadModel";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FileUploadService {
  constructor(private config: Config, private http: HttpService) {}

  uploadFile(model: IFileUploadModel): Observable<IGenericResponse<string>> {
    const payload = new FormData();
    payload.append("File", model.File);
    return this.http.post<any, any>(
      this.config.COMMON_FILE_UPLOAD +
        `?Type=${model.Type}&InstanceBranchId=${model.InstanceBranchId}&FileName=${model.FileName}`,
      payload
    );
  }

  uploadFileDoc(model: IFileUploadModel): Observable<IGenericResponse<string>> {
    const payload = new FormData();
    payload.append("File", model.File);
    return this.http.post<any, any>(
      this.config.COMMON_FILE_UPLOAD_CANCEL +
        `?Type=${model.Type}&InstanceBranchId=${model.InstanceBranchId}&FileName=${model.FileName}`,
      payload
    );
  }
}
