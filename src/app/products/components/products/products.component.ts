import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { BudgetService } from 'src/app/budgets/services/budget.service';
import { ConfirmComponent } from 'src/app/shared/confirm/components/confirm.component';
import { ConfirmButton } from 'src/app/shared/confirm/interfaces/confirm-button';
import { Product } from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

	products: Product[] = [];
	t_headers = [
		{
			name: 'ID',
			value: 'id'
		} ,
		{
			name: 'Nombre',
			value: 'name'
		} ,
		{
			name: 'Cantidad',
			value: 'quantity'
		} ,
		{
			name: 'Categoria',
			value: 'typeName'
		} ,
		{
			name: 'Prioridad',
			value: 'prio'
		} ,
		{
			name: 'Precio',
			value: 'price'
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
	
	modalRef!: BsModalRef;
	 

	constructor(
		private _productsSvc: ProductsService ,
		private _modalService: BsModalService,
		private _router: Router,
		private _toastSvc : ToastrService,
		private _budgetSvc: BudgetService
		) { }

	ngOnInit(): void {
		this.initialize();
	}

	async initialize() {
		try {
			this.products = (await this._productsSvc.all().toPromise()).map((product: Product) => {
				
				if(product.type.name === 'untype'){
					product.typeName = '';
				} else {
					product.typeName = product.type.name;
				}
				
				return product;
			});

		} catch (error) {
			console.log(error);
		}
	}

	add(){
	}

	goTo(id: number): void {
		this._router.navigate(['/products', id])
	}

	async delete(id: number) {

		try {
			const response = await this._productsSvc.sell(id).toPromise();
			
			this._toastSvc.success('Se ha procedido a la desintegracion correctamente','Desintegrado');

			if (response) {
				this.initialize();
			}

			this.modalRef.hide();
		} catch (error) {
			console.error("Deleting failed");
			this._toastSvc.error(error,'Desintegracion fallida');
		}

	}

	async openModal(id: number) {
		try {
			const product: any = await this._productsSvc.get(id).toPromise();			

			this.modalRef = this._modalService.show(ConfirmComponent, {
				initialState: {
					title: 'Estas seguro?',
					description: 'Esta accion provocara que se proceda a la venta forzada de todo el lote de productos '+
									'con nombre e ID <br><br>      ' + 
									'ID = ' + product.id + '<br>Nombre = ' + product.name + 
									'<br><br>Lo cual porvocará unos beneficios de:<br>'+
									'Total = '+ product.price * product.quantity
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
						this.delete(product.id);
					}
				}
			];
	
			/* le pasa los botones al modal */
			this.modalRef.content.buttons = buttons;
		} catch (error) {
			console.log(error);
		}

		
	}

}



