import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "numberDecimalPipe",
  pure: false
})
export class NumberConvertDecimalPipe implements PipeTransform {
  transform(val) {
    if (val) {
      val = this.format_number(val);
    }
    return val;
  }

  format_number(number) {
    if (!Number.isInteger(number)) {
      let decimalNumber = parseFloat(number).toFixed(2);
      let parts = decimalNumber.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    } else {
      let decimalNumber = parseFloat(number).toFixed(2);
      let parts = decimalNumber.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts[0];
    }
  }
}
