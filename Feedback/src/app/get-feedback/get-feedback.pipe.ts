import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "getFeedback",
})
export class GetFeedbackPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (value) {
      return value;
    } else {
      return "NA";
    }
  }
}
