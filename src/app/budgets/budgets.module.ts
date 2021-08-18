import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetsComponent } from './components/budgets/budgets.component';
import { BudgetComponent } from './components/budget/budget.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: BudgetsComponent
  },
  {
    path: 'add',
    component: BudgetComponent
  },
  {
    path: ':id',
    component: BudgetComponent
  }
]

@NgModule({
  declarations: [    
    BudgetComponent,
    BudgetsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class BudgetsModule { }
