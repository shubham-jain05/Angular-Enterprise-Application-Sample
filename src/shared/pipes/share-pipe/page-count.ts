import { Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash";
@Pipe({
  name: 'pageCount'
})
export class PageCountPipe implements PipeTransform {

  transform(selectedTab, data, type): any {
    // tslint:disable-next-line:curly
    if (_.isUndefined(selectedTab) || _.isNull(selectedTab))
      return 0;

    if (type == "SEARCH") {
      switch (selectedTab) {
        case "All":
          return data.alltotal;
        case "Flight":
          return data.flighttotal;
        case "Hotel":
          return data.hoteltotal;
        case "Package":
          return data.packagetotal;
        case "tour":
          return 10;
        case "standalone":
          return data.standalonetotal;
      }
    } else {
      switch (selectedTab) {
        case "All":
          return data.allBookingstotal;
        case "Flight":
          return data.flightBookingstotal;
        case "Hotel":
          return data.hotelBookingstotal;
        case "Package":
          return data.packageBookingstotal;
        case "tour":
          return 10;
        case "standalone":
          return data.standaloneBookingstotal;
      }
    }

  }

}
