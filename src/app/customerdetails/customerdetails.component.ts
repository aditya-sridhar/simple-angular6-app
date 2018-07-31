import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from '../customerdetails'
import { DataService } from '../data.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {
  customerDetails: CustomerDetails = null;

  constructor(private dataService: DataService, private activeRoute: ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.getCustomerDetails();
  }

  getCustomerDetails(): void {
    this.activeRoute.params.subscribe(routeParams => {

      this.dataService.getCustomerDetails(routeParams.id).subscribe(

        (customerDetails: CustomerDetails) => {
          this.customerDetails = customerDetails;
          console.log(customerDetails);
        });

    });

  }

  goToCustomerPage() : void {
    this.router.navigateByUrl("/customers");
  }

}
