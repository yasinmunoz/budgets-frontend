import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}



	/* Util? */

	sortByID(a: Product, b: Product) {
		if (a.id < b.id) {
			return -1;
		}
		if (a.id > b.id) {
			return 1;
		}
		return 0;
	}

	sortByName(a: Product, b: Product) {
		if (a.name < b.name) {
			return -1;
		}
		if (a.name > b.name) {
			return 1;
		}
		return 0;
	}

	sortByCuantity(a: Product, b: Product) {
		if (a.cuantity < b.cuantity) {
			return -1;
		}
		if (a.cuantity < b.cuantity) {
			return 1;
		}
		return 0;
	}

	sortByType(a: Product, b: Product) {
		if (a.type < b.type) {
			return -1;
		}
		if (a.type > b.type) {
			return 1;
		}
		return 0;
	}

	sortByPrio(a: Product, b: Product) {
		if (a.prio < b.prio) {
			return -1;
		}
		if (a.prio > b.prio) {
			return 1;
		}
		return 0;
	}

	sortByPrice(a: Product, b: Product) {
		if (a.price < b.price) {
			return -1;
		}
		if (a.price > b.price) {
			return 1;
		}
		return 0;
	}
}
