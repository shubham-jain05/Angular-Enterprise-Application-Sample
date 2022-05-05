import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emptyStringCheck',
  pure: false
})
export class EmptyStringCheckPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return this.isEmpty(value) ? 'NA' : value;
  }

  private isEmpty(val: string): boolean {
    return val === '' || val === undefined || val === null || val === 'null';
  }
}
