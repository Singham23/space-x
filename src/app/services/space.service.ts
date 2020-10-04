import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class SpaceService {
  spaceUrl: string = "https://api.spaceXdata.com/v3/launches?limit=100";

  constructor(private http: HttpClient) {}

  getAllPrograms(): Observable<any[]> {
    return this.http
      .get<any[]>(this.spaceUrl)
      .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    let errMsg: string = "";
    if (err.error instanceof Error) {
      console.log("An error occurred:", err.error.message);
      let errMsg = err.error.message;
    } else {
      console.log(`Backend returned code ${err.status}`);
      let errMsg = err.error.status;
    }
    return Observable.throw(errMsg);
  }
}
