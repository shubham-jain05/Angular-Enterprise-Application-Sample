import { Pipe, PipeTransform, NgModule } from '@angular/core';

@Pipe({
name: 'minuteSecond',
pure: false
 })
export class MinuteSecondPipe implements PipeTransform {
    transform(value: any): any {
        const hours = Math.floor((value / 60));
        const minutes = Math.floor((value % 60));
        return `${hours}h ${minutes}m`;
    }
}

@NgModule({
    imports: [],
    declarations: [MinuteSecondPipe],
    exports: [MinuteSecondPipe]
})
export class MinuteSecondPipeModule { }
