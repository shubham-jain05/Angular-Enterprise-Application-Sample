import { Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash";
@Pipe({
  name: 'getFilterCount'
})
export class GetFilterCountPipe implements PipeTransform {

  transform(value: any, type): any {
    let count = 0;
    if (!_.isUndefined(value) && !_.isUndefined(value.filters) && !_.isUndefined(value.filters.filters)
    ) {
      switch (type) {
        case 0:
          count = value.filters.filters.filter(function (element) {
            return element.filterType == 0;
          }).length;
          break;
        case 1:
          count = value.filters.filters.filter(function (element) {
            return element.filterType == 1;
          }).length;
          break;
        case 2:
          count = value.filters.filters.filter(function (element) {
            return element.filterType == 2;
          }).length;
          break;
        case 3:
          count = value.filters.filters.filter(function (element) {
            return element.filterType == 3;
          }).length;
          break;
        case 4:
          count = value.filters.filters.filter(function (element) {
            return element.filterType == 4;
          }).length;
          break;
        case 5:
          count = value.filters.filters.filter(function (element) {
            return element.filterType == 5;
          }).length;
          break;
        case 6:
          count = value.filters.filters.filter(function (element) {
            return element.filterType == 6;
          }).length;
          break;
        case 7:
          count = value.filters.filters.filter(function (element) {
            return element.filterType == 7;
          }).length;
          break;
        case 8:
          count = value.filters.filters.filter(function (element) {
            return element.filterType == 8;
          }).length;
          break;
        case 9:
          count = value.filters.filters.filter(function (element) {
            return element.filterType == 9;
          }).length;
          break;
        case 10:
          count = value.filters.filters.filter(function (element) {
            return element.filterType == 10;
          }).length;
          break;
        case 11:
          count = value.filters.filters.filter(function (element) {
            return element.filterType == 11;
          }).length;
          break;
        case 12:
          count = value.filters.filters.filter(function (element) {
            return element.filterType == 12;
          }).length;
          break;
        case 13:
          count = value.filters.filters.filter(function (element) {
            return element.filterType == 13;
          }).length;
          break;
        case 14:
          count = value.filters.filters.filter(function (element) {
            return element.filterType == 14;
          }).length;
          break;
        default:
          break;
      }
      return count;
    } else {
      return count;
    }
  }

}
