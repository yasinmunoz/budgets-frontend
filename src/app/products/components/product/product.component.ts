import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
	
	id!:any;
	product !: Product;

	constructor(private _route: ActivatedRoute,
		private _productSvc: ProductsService) { }

	ngOnInit(): void {
		console.log('ngOnInit 0');
		
		this.id = this._route.snapshot.paramMap.get('id');

		if(this.id){
			this.id = parseInt(this.id);
			
			this.initialize();
			console.log('a');
			
		}
	}

	async initialize(){
		console.log('initiaze 0');
		this.product = await this._productSvc.get(this.id).toPromise();
		console.log(this.product);
		
		
	}

}
