import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class GetFeedbackService {
  url = "https://feedback-infy.firebaseio.com/";
  constructor(private http: HttpClient) {}
  display(name): Observable<any> {
    return this.http.get<any>(this.url + name + ".json");
  }
}
