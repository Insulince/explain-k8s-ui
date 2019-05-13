import {Component, OnInit} from "@angular/core";
import {tap} from "rxjs/operators";
import {Explanation} from "../../models/explanation.model";
import {ExplanationsService} from "../../services/explanations.service";

@Component({
  selector: "explain-k8s-explain",
  templateUrl: "./explain.component.html",
  styleUrls: ["./explain.component.scss"]
})
export class ExplainComponent implements OnInit {
  public loading: boolean = false;
  public explanations: Array<Explanation> = [];

  public constructor(private explanationsService: ExplanationsService) {
  }

  public ngOnInit(): void {
    this.loading = true;
    this.explanationsService.getExplanations().pipe(
      tap((_: Array<Explanation>): any => this.loading = false)
    ).subscribe(
      (explanations: Array<Explanation>): void => {
        this.explanations = explanations;
      }
    );
  }
}
