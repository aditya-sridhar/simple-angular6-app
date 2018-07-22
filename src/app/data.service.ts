import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Customer } from './customer'
import { CustomerDetails } from './customerdetails'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getCustomerList(): Observable<Customer[]> {
    return (this.http.get<Customer[]>("assets/samplejson/customerlist.json"));
  }

  public getCustomerDetails(id: number): Observable<CustomerDetails> {
    return (this.http.get<CustomerDetails>("assets/samplejson/customer" + id + ".json"));
  }
}
