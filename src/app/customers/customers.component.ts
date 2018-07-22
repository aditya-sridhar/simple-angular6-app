import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Customer } from '../customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getCustomerList();
  }

  getCustomerList(): void {
    this.dataService.getCustomerList().subscribe(
      (customers: Customer[]) => {
        this.customers = customers;
        console.log(customers)
      });
  }

}
