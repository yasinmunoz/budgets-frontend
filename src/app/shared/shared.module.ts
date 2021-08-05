import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { PFirstLetterMayusPipe } from './pipes/PFirstLetterMayusPipe/p-first-letter-mayus.pipe';
import { PFirstLetterLowerPipe } from './pipes/p_FirstLetterLower/p-first-letter-lower.pipe';

@NgModule({
  declarations: [
    ConfirmComponent,
    PFirstLetterMayusPipe,
    PFirstLetterLowerPipe,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ConfirmComponent,
    PFirstLetterMayusPipe,
    PFirstLetterLowerPipe
  ]
}) export class SharedModule { }