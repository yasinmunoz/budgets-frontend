import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BudgetService } from '../../services/budget.service';
import { first, map, tap } from 'rxjs/operators';
import { Budget } from '../../interfaces/budget';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})

export class BudgetComponent implements OnInit {

  id?: any;
  form: FormGroup = this._formBld.group({
    name: [null],
    task_id: [null],
    state_id: [null],
    description: [null],
    total: [null],
    lines: this._formBld.array([])
  });

  states$ = this._budgetsSvc.states();
  lineStates$ = this._budgetsSvc.lineStates();

  get lines(): FormArray {
    return this.form.get('lines') as FormArray;
  }

  constructor(
    private _formBld: FormBuilder,
    private _budgetsSvc: BudgetService,
    private _activatedRoute: ActivatedRoute
  ) { }

  addBudgetLine() {
    this.lines.push(this._formBld.group({
      name: [null],
      description: [null],
      state_id: [null],
      cost: [null],
      costPerHour: [null],
      total: [null]
    }))
  }

  removeBudgetLine() {
    this.lines.removeAt(length-1);
  }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
		this.inicializate();
  }

  async inicializate() {
		if (this.id) {
      this._budgetsSvc.find(this.id).pipe(
        first(),

        // Tap hace algo pero no modifica el resultado
        tap((o: Budget) => this.createAndFillForm(o))
      ).subscribe();
		}
    
	}

  createAndFillForm(budget: Budget) {
    budget.lines?.forEach(budget => this.addBudgetLine());
    this.form.patchValue(budget);
  }
}


