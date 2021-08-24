import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { ReactiveFormsModule } from '@angular/forms';

const routes : Routes = [
	{
		path : '',	// va a la tabla de productos
		component : ProductsComponent
	} , {
		path : ':id', //:id -> : = parametro
		component: ProductComponent
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
		SharedModule,
		ProgressbarModule.forRoot(),
		ReactiveFormsModule
	]
})
export class ProductsModule { }

