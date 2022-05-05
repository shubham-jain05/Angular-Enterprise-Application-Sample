import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isarray'
})
export class IsarrayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value == undefined) return false;
    if (value.constructor === Array) return true;
    else return false;
  }

}
