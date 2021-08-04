import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
	declarations: [
		ProductsComponent,
		ProductComponent
	],
	imports: [
		CommonModule
	]
})
export class ProductsModule { }
