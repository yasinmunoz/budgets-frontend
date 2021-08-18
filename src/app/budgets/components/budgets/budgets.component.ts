import { Component, OnInit, TemplateRef } from '@angular/core';
import { BudgetService } from '../../services/budget.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { ConfirmButton } from 'src/app/shared/confirm/interfaces/confirm-button';
import { ConfirmComponent } from 'src/app/shared/confirm/components/confirm.component';
import { Budget } from '../../interfaces/budget';
/* import { Directive, ElementRef } from '@angular/core';
 */



@Component({
	selector: 'app-budgets',
	templateUrl: './budgets.component.html',
	styleUrls: ['./budgets.component.scss']
})
export class BudgetsComponent implements OnInit {

	modalRef!: BsModalRef;

	budgets: Budget[] = [];
	t_headers = [
		{
			name: 'ID',
			value: 'id'
		}, {
			name: 'Nombre',
			value: 'name'
		}, {
			name: 'Descripcion',
			value: 'description'
		}, {
			name: 'Coste Total',
			value: 'total'
		}
	];

	actions = [
		{
			title: 'see',
			class: 'btn-link btn-sm"',
			handler: (id: number) => this.goTo(id),
			iconClass: 'bi bi-eye-fill'
		},
		{
			title: 'destroy',
			class: 'btn-link text-danger btn-sm"',
			handler: (id: number) => this.openModal(id),
			iconClass: 'bi bi-trash'
		} 
	];

	constructor(
		private _budgetsSvc: BudgetService,
		private _router: Router,
		private _modalService: BsModalService
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

	goTo(id: number): void {
		this._router.navigate(['/budgets', id])
	}

	async delete(id: number) {

		try {
			const response = await this._budgetsSvc.delete(id).toPromise();

			if (response) {
				this.initialize();
			}

			this.modalRef.hide();
		} catch (error) {
			console.error("Deleting failed");
		}

	}

	openModal(id: number) {
		this.modalRef = this._modalService.show(ConfirmComponent, {
			initialState: {
				title: 'Are you sure?',
				description: 'This will delete the budget with ID ' + id + '.'
			},
			class: 'modal-dialog-centered'
		});

		const buttons: ConfirmButton[] = [
			{
				title: 'Cancelar',
				color: 'primary'

				/* sin handler, puesto que confirm.component.ts handle lo cierra si no hay handler  */

			}, {
				title: 'Borrar',
				color: 'danger',

				handler: () => {
					this.delete(id);
				}
			}
		];

		/* le pasa los botones al modal */
		this.modalRef.content.buttons = buttons;
	}

}