import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BudgetService } from '../../services/budget.service';

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.scss']
})
export class BudgetsComponent implements OnInit {

  budgets?: any[];

  constructor(
    private _formBld: FormBuilder,
    private _budgetsSvc: BudgetService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.initialize();
  }

  async initialize() {
    try {
      this.budgets = await this._budgetsSvc.all().toPromise();
    } catch (error) {
      console.log(error);
    }
  }

  goTo(budget: any): void {
    this._router.navigate(['/budgets', budget.id])
  }

}
