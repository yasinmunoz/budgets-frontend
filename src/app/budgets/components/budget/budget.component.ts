import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BudgetService } from '../../services/budget.service';
import { first, map, tap } from 'rxjs/operators';
import { Budget } from '../../interfaces/budget';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-budget',
	templateUrl: './budget.component.html',
	styleUrls: ['./budget.component.scss']
})

export class BudgetComponent implements OnInit {
	id?: any;
	form: FormGroup = this._formBld.group({
		id: [null],
		name: [null, [Validators.required]],
		// task_id: [null],
		state_id: [null, [Validators.required]],
		description: [null],
		total_in_hours: [null, [Validators.required]],
		total: [null, [Validators.required]],
		lines: this._formBld.array([])
	});

	states$: Observable<any[]> = this._budgetsSvc.states();
	lineStates$: Observable<any[]> = this._budgetsSvc.lineStates();

	get lines(): FormArray {
		return this.form.get('lines') as FormArray;
	}

	constructor(
		private _formBld: FormBuilder,
		private _budgetsSvc: BudgetService,
		private _activatedRoute: ActivatedRoute,
		private _router: Router
	) { }

	removeBudgetLine() {
		this.lines.removeAt(length - 1);
	}

	ngOnInit(): void {
		this.id = this._activatedRoute.snapshot.paramMap.get('id');
		this.inicializate();
	}

	async inicializate() {

		if (this.id) {
			const sus = this._budgetsSvc.find(this.id).pipe(
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

	addBudgetLine() {
		this.lines.push(this._formBld.group({
			id: [null],
			name: [null, [Validators.required]],
			description: [null],
			state_id: [null, [Validators.required]],
			quantity: [null, [Validators.required]],
			costPerHour: [null, [Validators.required]],
			totalLine: [null, [Validators.required]]
		}))
	}

	setTotalLine(line: AbstractControl) {
		const hours = line.get('quantity')?.value;
		const costPerHour = line.get('costPerHour')?.value;

		if (hours && costPerHour) {
			line.get('totalLine')?.patchValue(hours * costPerHour);
		} else {
			line.get('totalLine')?.patchValue(0);
		}

		this.setTotal();
	}

	setTotal() {
		const totals = this.lines.controls.map(control => control.get('totalLine')?.value || 0);
		const totalHours = this.lines.controls.map(control => control.get('quantity')?.value || 0);

		this.form.get('total')?.patchValue(totals.reduce((acc, curr) => acc + curr), 0);
		this.form.get('total_in_hours')?.patchValue(totalHours.reduce((acc, curr) => acc + curr), 0);
	}

	async save() {
		const data = this.form.value;

		try {
			const result = await this._budgetsSvc.save(data).toPromise();

			if (result?.id) {
				this._router.navigate(['/budgets', result.id]);
			}
			console.log(result);

		} catch (error) {
			console.log('Saving failed');
		}

	}

	async delete () {

		try {
			const response = await this._budgetsSvc.delete(this.id).toPromise();

			if (response) {			
				//this.initialize();	
				this._router.navigate(['/budgets']);
			}
			
		} catch (error) {
			console.error("Deleting failed")
		}

	}
	
}


