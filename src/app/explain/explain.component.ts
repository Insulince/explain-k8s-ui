import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, switchMap, tap, toArray} from 'rxjs/operators';
import {from, Observable} from 'rxjs';
import {Explanation, IExplanation} from '../../models/explanation.model';
import {plainToClass} from 'class-transformer';

@Component({
  selector: 'explain-k8s-explain',
  templateUrl: './explain.component.html',
  styleUrls: ['./explain.component.scss']
})
export class ExplainComponent implements OnInit {
  public loading: boolean = false;
  public explanations: Array<Explanation> = [];

  public constructor(private http: HttpClient) {
  }

  public ngOnInit(): void {
    this.loading = true;
    this.http.get('/assets/explanation.json').pipe(
      switchMap((iExplanations: Array<IExplanation>): Observable<IExplanation> => from(iExplanations)),
      map((iExplanation: IExplanation): Explanation => plainToClass(Explanation, iExplanation)),
      toArray(),
      tap((_: Array<Explanation>): any => this.loading = false)
    ).subscribe(
      (explanations: Array<Explanation>): void => {
        this.explanations = explanations;
      }
    );
  }
}
