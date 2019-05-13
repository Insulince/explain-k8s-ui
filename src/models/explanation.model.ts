import {Type} from "class-transformer";

export interface IExplanation {
  name: string;
  fullName: string;
  type: string;
  description: string;
  fields: Array<IExplanation>;
}

export class Explanation {
  public name: string = "";
  public fullName: string = "";
  public type: string = "";
  public description: string = "";
  @Type(() => Explanation)
  public fields: Array<Explanation> = [];

  public constructor() {
  }
}
