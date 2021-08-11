import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PFirstLetterMayusPipe } from './pipes/p-FirstLetterMayus/p-first-letter-mayus.pipe';
import { PFirstLetterLowerPipe } from './pipes/p-FirstLetterLower/p-first-letter-lower.pipe';
import { PInvertColorPipe } from './pipes/p-InvertColor/p-invert-color.pipe';
import { PFilterPipe } from './pipes/p-Filter/p-filter.pipe';
import { PSlicePipe } from './pipes/p-Slice/p-slice.pipe';
import { PSumByPipe } from './pipes/p-SumBy/p-sum-by.pipe';
import { PAbsolutePipe } from './pipes/p-Absolutey/p-absolute.pipe';
import { TableComponent } from './table/components/table.component';
import { ConfirmComponent } from './confirm/components/confirm.component';
import { SortDirective } from './directive/sort.directive';

@NgModule({
  declarations: [
    ConfirmComponent,
    PFirstLetterMayusPipe,
    PFirstLetterLowerPipe,
    PInvertColorPipe,
    PFilterPipe,
    PSlicePipe,
    PSumByPipe,
    PAbsolutePipe,
    TableComponent,
    SortDirective,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ConfirmComponent,
    PFirstLetterMayusPipe,
    PFirstLetterLowerPipe,
    PInvertColorPipe,
    PFilterPipe,
    PSlicePipe,
    PSumByPipe,
    PAbsolutePipe,
    TableComponent
  ]
}) export class SharedModule { }