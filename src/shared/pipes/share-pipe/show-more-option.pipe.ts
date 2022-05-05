import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showMoreOption'
})
export class ShowMoreOptionPipe implements PipeTransform {

  transform(value, filterType): any {
    return value[filterType];
  }

}
