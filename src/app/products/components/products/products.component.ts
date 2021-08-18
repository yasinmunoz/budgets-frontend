import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
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
			value: 'type'
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
	
	modalRef!: BsModalRef;

	constructor(
		private _productsSVC: ProductsService/* ,
		private _modalService: BsModalService */
		) { }

	ngOnInit(): void {
		this.inicialize();
	}

	async inicialize() {
		try {
			this.products = await this._productsSVC.all().toPromise();

		} catch (error) {
			console.log(error);
		}
	}

	add(){
	}

}



