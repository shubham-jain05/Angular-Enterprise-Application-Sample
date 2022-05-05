import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minusSignToParens',
  pure: false
})
export class MinusSignToParens implements PipeTransform {
  transform(value: any, args?: any): any {
    return value.charAt(0) === '-' ?
      '(' + value.substring(1, value.length) + ')' :
      value;
  }
}

@NgModule({
  imports: [],
  declarations: [MinusSignToParens],
  exports: [MinusSignToParens]
})
export class  MinusSignToParensModule { }
