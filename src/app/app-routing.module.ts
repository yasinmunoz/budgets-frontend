import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '', redirectTo: 'auth/login', pathMatch: 'full'
	},
	{
		path: 'auth',
		loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
	},
	{
		path: 'users',
		loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
	},
/* 	{
		path: 'users/profile/:id',
		loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
	}, */
	{
		path: 'budgets',
		loadChildren: () => import('./budgets/budgets.module').then(m => m.BudgetsModule)
	},
	{
		path: 'products',
		loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
