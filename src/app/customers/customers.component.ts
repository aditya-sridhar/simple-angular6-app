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
  selectedCustomer : string = "temp";
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getCustomerList();
  }

  getCustomerList(): void {
    this.dataService.getCustomerList().subscribe(
      (customers: Customer[]) => {
        this.customers = customers;
        this.selectedCustomer = customers[0].name;
        console.log(customers)
      });
  }

  setSelectedCustomer( cust : string ): void {
    this.selectedCustomer = cust ;
  }

}
