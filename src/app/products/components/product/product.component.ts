import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { first, tap } from 'rxjs/operators';
import { Product } from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';
import { environment } from 'src/environments/environment';
import { fromEvent } from 'rxjs';


@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

	id!: any;
	product  !: any;
	randomUM !: number;
	favorite !: boolean;
	porcentaje !: number;
	disable: boolean = false;
	stylePB!: string

	quantityNow    : FormControl = new FormControl();
	quantityMaxNow : FormControl = new FormControl();

	productForm: FormGroup = this._formBuilder.group({
		id: 		 [null],
		prio: 		 [null],
		name: 		 [null],
		price: 		 [null, Validators.required],
		typeName: 	 [null],
		quantity:    [0, Number, [Validators.required, Validators.min(0)]],
		quantityMax: [0, Number, Validators.required],
		description: [null],
	});

	constructor(private _route: ActivatedRoute,
		private _productSvc: ProductsService,
		private _formBuilder: FormBuilder) { }

	ngOnInit(): void {
		this.id = this._route.snapshot.paramMap.get('id');
		
		if (this.id) {
			this.id = parseInt(this.id);

			this.getProduct();

		} else{
			this.addProduct();
		}
	}

	async getProduct() {
		this.product = await this._productSvc.get(this.id).toPromise();

		/* estos 2 att quantityMax no se llama asi en la BBDD y typeName no existe porque es una tabla aparte */
		this.product.quantityMax = this.product.quantity_max;
		this.product.typeName = this.product.type.name;

		this.porcentaje = (this.product.quantity * 100) / this.product.quantityMax
		this.progressbar();

		this.productForm.patchValue(this.product);
		this.productForm.disable();
		
	}

	addProduct(){
		this.productForm.reset();
	}

	porcentajeMethod(){
		// fromevent rxjs
		this.porcentaje = (+this.quantityNow * 100) / +this.quantityMaxNow;
		console.log(this.porcentaje);
		
		
		this.progressbar();
	}

	fav() {
		if (this.product.prio) {
			this.product.prio = false;
		} else {
			this.product.prio = true;
		}
		this.productForm.patchValue(this.product);
	}

	async save() {
		const data = this.productForm.value;

		try {
			const result = await this._productSvc.saveEdit(data).toPromise();

		} catch (error) {
			console.log('Saving failed');
		}
	}

	edit() {
		if (this.disable) {
			this.disable = false;
			this.productForm.disable();
		} else {
			this.disable = true;
			this.productForm.enable();
		}
	}

	progressbar(){
		return this.stylePB = 'width: '+ this.porcentaje + '%';
	}

	/* PROGRESSBAR ===================================================== */

	dynamic!: number;

	random(): void {
		const value = Math.floor(Math.random() * 100 + 1);

		this.dynamic = this.porcentaje;
		this.dynamic = value;
	}

}
