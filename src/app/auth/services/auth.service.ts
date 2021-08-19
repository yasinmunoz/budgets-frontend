import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/users/interface/user';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	user$ = new Subject<any>();

	prefix: string = 'auth';

	private _token!: string;
	private _user!: any;

	/*---------------------TOKEN---------------------------------*/
	get token(): string {
		return this._token;
	}

	set token(value: string) {
		localStorage.setItem('token', value);
		this._token = value;
	}
	
	/*----------------------USER--------------------------------*/
	get user() {
		return this._user;
	}

	set user(value: any) {
		localStorage.setItem('user', JSON.stringify(value));
		this._user = value;
		
		this.user$.next(this._user);
	}
	/*------------------------------------------------------*/

	async login(user:{ email: string; password: string }) {
		return this._http.post(environment.origin + this.prefix + '/login', user).pipe(
			map((result: any) => {
				this.token = result.access_token;
      			this.user = result.user;

				  return  result;
			})
		).toPromise();
	}

	logout() {
		localStorage.clear();
		this._user = null;
		this._token = '';
	}

	constructor(private _http: HttpClient) { 
	}

	// User registration
	register(user: User): Observable<any> {
		return this._http.post(environment.origin + this.prefix + '/register', user);
	}

	/* // Login antiguo
	async signin(user: { email: string; password: string }) {
		try {
			const result: any = await this._http.post(environment.origin + this.prefix + '/login', user).toPromise();

			if (result) {
				this.user = result.user;
			}

			return result;
		} catch (error) {
			return null;
		}
		// return this.http.post(environment.origin + this.prefix + '/login', user);
	} */
}
