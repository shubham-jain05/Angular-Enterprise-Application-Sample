import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameInitials',
  pure: false
})
export class NameInitialsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const fullName = value;
    const firstLetter = (fullName != null && fullName.split(' ').length > 0) ? fullName.split(' ')[0][0] : '';
    const secondLetter = (fullName != null && fullName.split(' ').length > 1) ? fullName.split(' ')[1][0] : '';
    return `${firstLetter}${secondLetter}`;
  }

}
