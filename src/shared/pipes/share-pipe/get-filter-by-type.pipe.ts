import { Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash";
@Pipe({
  name: 'getFilterByType'
})
export class GetFilterByTypePipe implements PipeTransform {

  transform(hotelList, type, showFilterAllOptions): any {
    let response = [];
    if (!_.isUndefined(hotelList) && !_.isUndefined(hotelList.filters) && !_.isUndefined(hotelList.filters.filters)) {
      switch (type) {
        case 0:
          response = hotelList.filters.filters.filter(function (element) {
            return element.filterType == 0;
          });
          // response = response.sort(function (a, b) {
          //   return a.value - b.value;
          // });
          break;
        case 1:
          response = hotelList.filters.filters.filter(function (element) {
            return element.filterType == 1;
          });
          break;
        case 2:
          response = hotelList.filters.filters.filter(function (element) {
            return element.filterType == 2;
          });
          break;
        case 3:
          response = hotelList.filters.filters.filter(function (element) {
            return element.filterType == 3;
          });
          break;
        case 4:
          response = hotelList.filters.filters.filter(function (element) {
            return element.filterType == 4;
          });
          break;
        case 5:
          response = hotelList.filters.filters.filter(function (element) {
            return element.filterType == 5;
          });
          break;
        case 6:
          response = hotelList.filters.filters.filter(function (element) {
            return element.filterType == 6;
          });
          break;
        case 7:
          response = hotelList.filters.filters.filter(function (element) {
            return element.filterType == 7;
          });
          break;
        case 8:
          response = hotelList.filters.filters.filter(function (element) {
            return element.filterType == 8;
          });
          break;
        case 9:
          response = hotelList.filters.filters.filter(function (element) {
            return element.filterType == 9;
          });
          response = response.sort(function (a, b) {
            return a.value - b.value;
          });
          break;
        case 10:
          response = hotelList.filters.filters.filter(function (element) {
            return element.filterType == 10;
          });
          break;
        case 11:
          response = hotelList.filters.filters.filter(function (element) {
            return element.filterType == 11;
          });
          break;
        case 12:
          response = hotelList.filters.filters.filter(function (element) {
            return element.filterType == 12;
          });
          break;
        case 13:
          response = hotelList.filters.filters.filter(function (element) {
            return element.filterType == 13;
          });
          break;
        case 14:
          response = hotelList.filters.filters.filter(function (element) {
            return element.filterType == 14;
          });
          break;
        case 17:
          response = hotelList.filters.filters.filter(function (element) {
            return element.filterType == 17;
          });
          break;
        default:
          break;
      }

      if (response.length <= 5) {
        showFilterAllOptions[type] = -1;
      }
      if (
        showFilterAllOptions[type] == 0 &&
        showFilterAllOptions[type] != 1 &&
        type != 0
      ) {
        response = response.slice(0, 5);
        showFilterAllOptions[type] = 0;
      }
      return response;
    } else {
      return response;
    }
  }

}
