# Simple Angular 6 App

## What is the Use of This Repo
This App is a Simple Angular 6 App which uses
1. Angular Components
2. HTTP Client
3. Angular Routing
4. Services
5. Very Basic Bootstrap
6. Communication from parent to child component

This Applications template can be copied and used to build other bigger applications.

The CSS used is very basic since the main aim of this project is to focus on angular 6

## Live Application url

### https://aditya-sridhar.github.io/simple-angular6-app/
This is the link where the app is deployed.

## What Does this Application do

This Application has just two pages.
1. A Customer List Page which Lists out all the Customers
2. A Customer Details Page which will display the Details for the Selected Customer


## Prerequites to Run the Application

### Install NodeJS

Refer https://nodejs.org/en/ to install NodeJS

### Install Angular CLI

Use the following command to install angular CLI

```bash
npm install -g @angular/cli
```

Refer https://cli.angular.io/ to know more about angular CLI

## Steps to Run the Application

Clone the repo into local

Open the project folder and install the npm packages using the following command

```bash
npm install
```

In Order to Run the Application Type the following command in command prompt

```bash
npm start
```

The Application runs on **localhost:4200**

## Application Design

The Components Created are

1. **CustomersComponent** : This Component Is to Display the List of Customers

2. **CustomerdetailsComponent** : This Component Displays the Details for a Single Selected Customer

3. **DisplayComponent** : This Component Displays the Customer name Clicked in the *CustomersComponent* ( The whole point for this component is to demonstrate parent to child component communication ). This is a child component of *CustomersComponent*

The Services Created are

1. **DataService** : All the Jsons used in the application are stored in assets/samplejson folder. DataService Helps in getting the Json from the assets/samplejson folder Using a Http Request . In Real Applications , the Service Helps to Get the Data from a Rest API or any other API by making a HTTP Request

Model Classes Used are

1. **Customer** : This is the model class used for the *CustomersComponent* to define the structure of each customer in the list

2. **CustomerDetails** : This is the model class used for *CustomerdetailsComponent* to define the structure containing all the customer details

Routing Module is used to Route between the 2 pages in the application
The 2 paths used in the routing module are

1. **/customers**  : This url displays the customer list and points to *CustomersComponent*

2. **/customerdetails/id** : This url displays the details for each customer and points to *CustomerdetailsComponent*

## Angular 6 References

Refer to https://angular.io/guide/quickstart to get an understanding of how angular 6 works
