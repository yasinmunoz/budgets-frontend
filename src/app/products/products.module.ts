import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
	{
		path : '',
		component : ProductsComponent
	} , {
		path : ':id' //:id -> : = parametro
	} 
]

@NgModule({
	declarations: [
		ProductsComponent,
		ProductComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
	]
})
export class ProductsModule { }

