import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/services/auth.service';
import { User } from './users/interface/user';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'budgets-frontend';
	user!: any;
	isCollapsed = false;

	constructor(
		private authSvc: AuthService,
		public router: Router,
	) {
		
	}

	ngOnInit() {
		//te suscribes al observable del behaviour para ver al usuario
		this.authSvc.user$.subscribe(user => {
			this.user = user;
		});
	}

	// Signout
	logOut() {
		this.authSvc.logout();
		this.router.navigate(['login']);
	}
}
