import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

	products: Product[] = [];

	constructor(
		private _productsSVC: ProductsService
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
	
	crescent: Boolean = false;
	order(col: number) {

		if (!this.crescent) {
			switch (col) {
				case 1: {
					this.products.sort((a, b) => (a.name > b.name) ? 1 : -1);
					break;
				}
				case 2: {
					this.products.sort((a, b) => {
						return  (a.cuantity > b.cuantity) ? 1 : -1;
					});
					break;
				}
				case 3: {
					this.products.sort((a, b) => (a.type > b.type) ? 1 : -1);
					break;
				}
				case 4: {
					this.products.sort((a, b) => (a.prio > b.prio) ? 1 : -1);
					break;
				}
				case 5: {
					this.products.sort((a, b) => (a.price > b.price) ? 1 : -1);
					break;
				}
			}

			this.crescent = true;
		} else {
			switch (col) {
				case 1: {
					this.products.sort((a, b) => (a.name > b.name) ? -1 : 1);
					break;
				}
				case 2: {
					this.products.sort((a, b) => (a.cuantity > b.cuantity) ? -1 : 1);
					break;
				}
				case 3: {
					this.products.sort((a, b) => (a.type > b.type) ? -1 : 1);
					break;
				}
				case 4: {
					this.products.sort((a, b) => (a.prio > b.prio) ? -1 : 1);
					break;
				}
				case 5: {
					this.products.sort((a, b) => (a.price > b.price) ? -1 : 1);
					break;
				}
			}
			this.crescent = false;
		}
	}



}



