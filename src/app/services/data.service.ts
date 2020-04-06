import { IModel } from "./../data";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private REST_API_SERVER =
    "https://brasil.io/api/dataset/covid19/caso/data?is_last=false&place_type=state&state=";

  constructor(private httpClient: HttpClient) {}

  public sendGetRequest(state: string) {
    return this.httpClient.get<IModel>(this.REST_API_SERVER + state);
  }
}
