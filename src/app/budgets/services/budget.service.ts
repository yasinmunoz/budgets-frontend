import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class BudgetService {

  constructor(
    private _http: HttpClient
  ) { }

  all(): Observable <any> {
    return this._http.get(environment.origin + 'budgets');
  }

  find(budgetId:number): Observable <any> {
    return this._http.get(environment.origin + 'budgets/'+budgetId)
  }
}