import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  CreateAppTypeRequestModel,
  ResponseApplicationModel,
  ResponseModel,
} from "../model/apptype_model";

@Injectable({
  providedIn: "root",
})
export class AppTypeService {
  private REST_API_SERVER = "https://oneui-builder.vdc2.com.vn";
  private REST_API_SUB_SERVER = "/api/oneui/v1/standalone";

  private APP_TYPE = "/apptype";
  private APPLICATION = "/application";

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      // Authorization: 'my-auth-token'
    }),
  };

  constructor(private httpClient: HttpClient) {}

  public getAppType(): Observable<ResponseModel> {
    const url = `${this.REST_API_SERVER}${this.REST_API_SUB_SERVER}${this.APP_TYPE}/all`;
    return this.httpClient.get<ResponseModel>(url, this.httpOptions);
  }

  public getApplications(): Observable<ResponseApplicationModel> {
    const url = `${this.REST_API_SERVER}${this.REST_API_SUB_SERVER}${this.APPLICATION}/all`;
    return this.httpClient.get<ResponseApplicationModel>(url, this.httpOptions);
  }

  public postComment(
    payload: CreateAppTypeRequestModel
  ): Observable<CreateAppTypeRequestModel> {
    const url = `${this.REST_API_SERVER}${this.REST_API_SUB_SERVER}${this.APP_TYPE}/create/${payload.id}`;
    console.log("postComment = ", url);
    console.log("postComment: payload", payload);
    return this.httpClient.post<CreateAppTypeRequestModel>(
      url,
      payload,
      this.httpOptions
    );
  }
}