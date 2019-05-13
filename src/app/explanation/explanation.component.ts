import {Component, ElementRef, Input, OnInit, ViewChild} from "@angular/core";
import {Explanation} from "../../models/explanation.model";
import * as $ from "jquery";

@Component({
  selector: "explain-k8s-explanation",
  templateUrl: "./explanation.component.html",
  styleUrls: ["./explanation.component.scss"]
})
export class ExplanationComponent implements OnInit {
  @Input()
  public explanation!: Explanation;

  @ViewChild("contentWrapper")
  public contentWrapper!: ElementRef<HTMLDivElement>;

  public closed: boolean = true;

  public constructor() {
  }

  public ngOnInit(): void {
    this.close("0");
  }

  public toggle(): void {
    if (!this.closed) {
      this.close();
    } else {
      this.open();
    }
  }

  public close(speed: string = "fast"): void {
    $(this.contentWrapper.nativeElement).slideToggle(speed, "swing", (): void => {
      this.closed = true;
    });
  }

  public open(speed: string = "fast"): void {
    this.closed = false;
    setTimeout(() => $(this.contentWrapper.nativeElement).slideToggle(speed, "swing"));
  }
}
