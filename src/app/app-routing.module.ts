import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ExplainComponent} from "./explain/explain.component";

const routes: Routes = [
  {
    path: "",
    component: ExplainComponent
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: "/"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  public constructor() {
  }
}
