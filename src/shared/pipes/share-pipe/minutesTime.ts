import { Pipe, PipeTransform, NgModule } from "@angular/core";

@Pipe({
  name: "minuteTime",
  pure: false
 })
export class MinuteTimePipe implements PipeTransform {
  transform(value: any): any {
    const hours = Math.floor(value / 60);
    const minutes = Math.floor(value % 60);
    return `${hours > 0 ? hours : '00'} : ${minutes > 0 ? minutes : '00'}`;
  }
}

@NgModule({
  imports: [],
  declarations: [MinuteTimePipe],
  exports: [MinuteTimePipe]
})
export class MinuteTimePipeModule {}
