import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
	{
		path: '',
		component: UsersComponent
	},
	{
		path: 'add',
		component: UserComponent
	},
	{
		path: 'profile/:id',
		component: UserProfileComponent
	}
]

@NgModule({
	declarations: [
		UserComponent,
		UsersComponent,
		UserProfileComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
	]
}) export class UsersModule { }
