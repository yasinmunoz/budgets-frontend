import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
  declarations: [
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
}) export class SharedModule { }