import { NgModule } from '@angular/core';
import { NameInitialsPipe } from './share-pipe/name-initials.pipe';
import { IsarrayPipe } from './share-pipe/isarray.pipe';
import { EmptyStringCheckPipe } from './share-pipe/empty-string-check.pipe';
import { NumberPipePipe } from './share-pipe/numberPipe';
import { NumberConvertDecimalPipe } from './share-pipe/numberConvertDecimalPipe';
import { ShowMoreOptionPipe } from './share-pipe/show-more-option.pipe';
import { GetFilterByTypePipe } from './share-pipe/get-filter-by-type.pipe';
import { GetFilterCountPipe } from './share-pipe/get-filter-count.pipe';
import { GetTitlePipe } from './share-pipe/get-title.pipe';
import { PageCountPipe } from './share-pipe/page-count';
import { SplitPipe } from './share-pipe/split-list.pipe';

@NgModule({
  declarations: [
    NameInitialsPipe,
    IsarrayPipe,
    EmptyStringCheckPipe,
    NumberPipePipe,
    NumberConvertDecimalPipe,
    ShowMoreOptionPipe,
    GetFilterByTypePipe,
    GetFilterCountPipe,
    GetTitlePipe,
    PageCountPipe,
    SplitPipe,
  ],
  imports: [],
  exports: [
    NameInitialsPipe,
    IsarrayPipe,
    EmptyStringCheckPipe,
    NumberPipePipe,
    NumberConvertDecimalPipe,
    ShowMoreOptionPipe,
    GetFilterByTypePipe,
    GetFilterCountPipe,
    GetTitlePipe,
    PageCountPipe,
    SplitPipe,
  ],
})
export class SharedPipesModuleModule {}
