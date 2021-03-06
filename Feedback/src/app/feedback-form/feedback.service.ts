import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FeedbackService {
  url = "https://feedback-infy.firebaseio.com/";
  constructor(private http: HttpClient) {}
  submitFeedback(empName, feedback): Observable<any> {
    empName = empName.toUpperCase();
    empName = empName.split(" ")[0];
    return this.http.post<any>(this.url + empName + ".json", feedback);
  }
}
