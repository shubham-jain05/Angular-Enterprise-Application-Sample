import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getTitle'
})
export class GetTitlePipe implements PipeTransform {

  transform(type, percentage): any {
    switch (type) {
      case "Standalone":
        return `Standalone Package ${percentage}%`;
      case "Flight":
        return `Flight ${percentage}%`;
      case "Hotel":
        return `Standalone Hotel ${percentage}%`;
      case "Package":
        return `Package ${percentage}%`;
      case "Tour":
        return `Tour ${percentage}%`;
      case "None":
        return `All`;
    }
  }

}
