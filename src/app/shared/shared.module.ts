import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { BrowserComponent } from './browser/components/browser/browser.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { ImageComponent } from './image/components/image/image.component';

import {HttpClientModule} from 
    '@angular/common/http';
    
import { BrowserModule } from 
'@angular/platform-browser';
import { BsModalRef } from 'ngx-bootstrap/modal';


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
    BrowserComponent,
    ImageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    ProgressbarModule.forRoot(),

    HttpClientModule,
    
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
    TableComponent,
    ImageComponent,
  ]
}) export class SharedModule { }