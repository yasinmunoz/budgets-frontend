import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class BudgetService {

  lineStates(): Observable<any[]> {
    return this._http.post(environment.origin + 'budgets/states', {}) as Observable<any[]>;
  }

  states(): Observable<any[]> {
    return this._http.post(environment.origin + 'budgets/states', {}) as Observable<any[]>;
  }

  constructor(
    private _http: HttpClient
  ) { }

  all(): Observable <any> {
    return this._http.get(environment.origin + 'budgets');
  }

  find(budgetId:number): Observable <any> {
    return this._http.get(environment.origin + 'budgets/'+budgetId)
  }

  save(data: any): Observable<any> {
    return this._http.put(environment.origin + 'budgets/', data);
  }
}