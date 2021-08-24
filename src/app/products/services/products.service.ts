import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/product';

@Injectable({
	providedIn: 'root'
})
export class ProductsService {

	constructor(
		private _http: HttpClient
	) { }

	all(): Observable<any> {
		return this._http.get(environment.origin + 'products');
	}

	get(id: number): Observable<any> {
		return this._http.get(environment.origin + 'products/' + id);
	}

	sell(id: number): Observable<any> {
		return this._http.delete(environment.origin + 'products/' + id);
	}

	saveEdit(data: any): Observable<any> {
		return this._http.put(environment.origin + 'products/' + data.id, data);
	}

}
