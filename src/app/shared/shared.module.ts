import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { PFirstLetterMayusPipe } from './pipes/p-FirstLetterMayus/p-first-letter-mayus.pipe';
import { PFirstLetterLowerPipe } from './pipes/p-FirstLetterLower/p-first-letter-lower.pipe';
import { PInvertColourPipe } from './pipes/p-InvertColour/p-invert-colour.pipe';
import { PFilterPipe } from './pipes/p-Filter/p-filter.pipe';
import { PSlicePipe } from './pipes/p-Slice/p-slice.pipe';
import { PSumByPipe } from './pipes/p-SumBy/p-sum-by.pipe';
import { PAbsolutePipe } from './pipes/p-Absolutey/p-absolute.pipe';

@NgModule({
  declarations: [
    ConfirmComponent,
    PFirstLetterMayusPipe,
    PFirstLetterLowerPipe,
    PInvertColourPipe,
    PFilterPipe,
    PSlicePipe,
    PSumByPipe,
    PAbsolutePipe,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ConfirmComponent,
    PFirstLetterMayusPipe,
    PFirstLetterLowerPipe,
    PInvertColourPipe,
    PFilterPipe,
    PSlicePipe,
    PSumByPipe,
    PAbsolutePipe,
  ]
}) export class SharedModule { }