import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes : Routes = [
	{
		path : '',
		component : ProductsComponent
	} , {
		path : ':id' //:id -> : = parametro
	} , {
		path : 'add'
	}
]

@NgModule({
	declarations: [
		ProductsComponent,
		ProductComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		SharedModule
	]
})
export class ProductsModule { }

