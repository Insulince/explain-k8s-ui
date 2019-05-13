import {Injectable} from "@angular/core";
import {map, switchMap, toArray} from "rxjs/operators";
import {Explanation, IExplanation} from "../models/explanation.model";
import {from, Observable} from "rxjs";
import {plainToClass} from "class-transformer";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: "root"
})
export class ExplanationsService {
  public constructor(private http: HttpClient) {
  }

  getExplanations(): Observable<Array<Explanation>> {
    return this.http.get(`${environment.explanationsLocation}`).pipe(
      switchMap((iExplanations: Array<IExplanation>): Observable<IExplanation> => from(iExplanations)),
      map((iExplanation: IExplanation): Explanation => plainToClass(Explanation, iExplanation)),
      toArray()
    );
  }
}
