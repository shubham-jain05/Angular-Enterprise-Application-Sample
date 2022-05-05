import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'LockFilter',
    pure: false
})

export class SearchPipe implements PipeTransform {
    transform(value: any, args: any): any {
        const filter = (args.length !== 0) ? args.toLocaleLowerCase() : null;
        return filter ? value.filter(item => item.name.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }
}

@NgModule({
    imports: [],
    declarations: [SearchPipe],
    exports: [SearchPipe]
})
export class  SearchPipeModule { }
