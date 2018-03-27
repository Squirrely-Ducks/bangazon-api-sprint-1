# Bangazon API

Welcome to the Bangazon Corporation API! Users can utilize GET/POST/PUT/DELETE commands for interaction with the Banagazon Database. This node.js application runs on an express framework to interact with an SQLite database. All necessary npms can be initialized by following the instructions below.

## Steps for Installation:
In your terminal enter the following commands to gain access to the BangazonCorp API:
* ``` git clone https://github.com/Squirrely-Ducks/bangazon-api-sprint-1.git ```
>To initialize the node packet manager:
* ``` npm init -y ```
>To install all required node packet dependancies"
* ``` npm install ```


## Initializing and Seeding the BangazonCorp Database
The database will be hosted locally on you machine. It can intialized and seeded with the following commands:
>To create all the necessary JSON files with randomized data:
* ``` node data/execute_data.js ```
>To insert the randomized data into the SQLite DataBase:
* ``` node db/build_db.js ```

Your environment is now set up run the BangazonCorp API

## Usage of API
>All calls to the BangazonCorp API will be from:
```javascript
http://localhost:4200/api/v1/
```
>To begin enter the following command line into the terminal to initialize the server:
```javascript
nodemon app.js
```

For the following resource verbs, Postman is recommended. Example data is provided where needed.

### CUSTOMERS
* GET all customers
    * To get all customers add the URL `customers`
* GET single customer
    * To get a single customer add the URL `customers/:id` 
* POST
    * To post a new product, use the URL `product/new` 
    
    * Example data keys:
 ```javascript
 {
	                    "first_name":"Griffin",
	                    "last_name":"Door",
	                    "street":"97885 Hog",
	                    "city":"Wart",
	                    "state":"New Castle",
	                    "zip":"911111",
	                    "phone": 4521835567,
	                    "email":"Deontae_Grady@hotmail.com",
	                    "acct_date":"2017-09-01T23:55:27.777Z",
	                    "active": 0
  }
  ```

### PRODUCTS
* GET all products
	* To access all products add the url `/products`
* GET single product by product_id
	* To access a single product by a product id add the url `/products/:id`
* POST
	* To post a new product use the URL `product/new`
	* To post a new object with the following keys:
```javascript
{
	"title":"Licensed Metal Chair",
	"price":"736.00","description":"innovative unleash channels",
	"type_id":9,"seller_id":8}
```
* PUT
	* To edit a new product use the URL `/products/:id/edit`
	* Example keys:
```javascript
{
	"title": "Incredible Fresh Bar",
	"price": "600.00",
	"description": "web-enabled productize experiences",
	"type_id": 3,
	"seller_id": 4
}
```
* DELETE
	* to delete a product use the URL `/products/:id/delete`
	
### PAYMENT TYPE
* GET all payment types
    * To get all customers add the URL `/payment`  
* GET single payment type by type ID
    * To get a single payment type add the URL`/payment/type/:id`  
* GET single payment type by customer ID
    * To get a single payment type add the URL `/payment/customer/:id` 
* POST
    * To post a new payment type, add the URL(in Postman or something similar) `/payment/new`
    * To post a new object with the following keys:
    
```javascript
{ 
	"customer_id": 79,
    	"type": 8,
    	"account_number": 0
}
```

* PUT
	* To edit a payment type add the URL `/payment/:id/edit`
	* Example keys:
```javascript
{
	"customer_id": 59,
    	"type": 5,
    	"account_number": 1
}
```
* DELETE
	* To delete a payment type add the URL `/payment/delete/:id`

### ORDERS
* GET 
	* To get all orders add the URL `/orders`
* GET 
	* To get a single orders add the URL `orders/:id`
* GET 
	* To get all products on a single order add the URL `orders/:id/products`
* POST
	* To get add a new orders add the URL `orders/new`
	* To post a new order with the following keys:
```javascript
	"customer_id": 33,
	"payment_type_id": 2,
	"product_id": 4,
	"order_date": "2017-03-14T14:39:53.094Z",
	"completed": 1
```

* PUT
	* To edit an order add the URL `orders/:id/edit`
	* Example keys:
```javascript
{
	"order_date": "2017-05-14T14:39:53.094Z",
}
```
	
* DELETE
	* To delete an order add the URL: `orders/:id/delete`



### PRODUCT TYPE
* GET all product types
	* To get all prouct types add the URl `/prodType/all` 
* GET single product types
	* To get single product types add the URL `/prodType/:id`
* POST
	* To add a product type add the URL `/prodType/new`
	* To post a new product type with the following key:
```javascript
{
	"type":"Cookies"
}
```
* PUT
	* To edit a product type add the URL `/prodType/edit/:id`
	* Example keys:
```javascript
{
	"type":" Gravy"
}
```
	
* DELETE
	* To edit a product type use the URL `/prodType/delete/:id`
	
### EMPLOYEES
* GET all employees
    * To get all employees add the URL`/employees`
* GET single employee
    * To get a single employee by id add the URL `/employees/:id`
* POST
    * To post a new employee, add the URL `product/new`
    * To post a new employee with the following keys:
```javascript
 {
	"department_id": "1",
 	"first_name": "Greta",
	"last_name": "Schoen",
	"job_title": "Future Applications Orchestrator",
	"is_supervisor": "0"
}
```
* PUT
	* To edit an employee add the the URL `/employees/:id/edit`
	* Example keys:
```javascript
 {
	"department_id": "1",
 	"first_name": "Greta",
	"last_name": "Schoen",
	"job_title": "Future Applications Orchestrator",
	"is_supervisor": "1"
}
```

### DEPARTMENTS
* GET all departments
	* To get a single department add the URL `/departments`
* GET 
	* To get a single department add the URL `/departments/:id`
* GET 
	* To get a department by supervisor add the URL `/departments/:id/employees`
* POST
	* To add a new department add the URL `/departments/new`
	* To post a new department with the following keys:
```javascript
{
	"dept_name": "payment Investor",
        "budget": 26330,
        "supervisor_id": 2
}
```
* PUT
	* To edit a department add the URL `/departments/:id/edit`
	* Example Keys:
```javascript
{
	"dept_name": "payment Investor",
        "budget": 26330,
        "supervisor_id": 5
}
```

### COMPUTERS
* GET all computers
	* To get all computers add `/computer` to the URL
* GET single computers
	* To get single computer by id add `/computer/:id` to the URL
* POST
	* To post a new computer use the URL`computer/new` 
	* To post a new object with the following keys:
```javascript
{
	"${purchase_date}": "2018-05-17T22:52:50.825Z",
	"${trash_date}": "2019-05-17T21:52:50.825Z",
	${employee_id}): 4
}
```

* PUT
	* To edit a computer add the URL `/computer/:id/edit`
	* Example keys:
```javascript
{
	"${purchase_date}": "2018-05-17T22:52:50.825Z",
        "${trash_date}": "2019-05-17T21:52:50.825Z",
         ${employee_id}): 6
}
```
* DELETE
	* To delete a computer add the URL `computer/:id/delete`

### TRAINING PROGRAMS
* GET all training programs:
	* To get list of all training programs add the URL `/training_programs/:id`
* GET all training programs with enrolled employees:
	* To get list of enrolled employess add the URL `/training_programs/employees`
* GET single training program
	* To get one training program add the URL: `/training_programs/:id`
* GET one training program with enrolled employees:
	* To get a single program's enrolled employees add the URL `/training_programs/program/:id`
*If null is returned, program does not have enrolled employees.*
*  GET one employee's training programs 
	* To get list of enrolled training programs by one employee add the URL `/training_programs/program/:id`
*If null is returned, employee has not enrolled in training programs.*

* POST new training program
	* To add a new program add the URL `/training_programs/new`
	* To Enter data into the body, for example:
```javascript
{
	"name": "Whats a computer 101?",
	"start_date": "2018-05-17T22:52:50.825Z",
	"end_date":"2019-04-19T09:52:57.063Z", 
	"capacity": 20
}
```

* PUT 
	* To edit training program add the URL `/training_programs/:id/edit`
	* Example keys
```javascript
{
	"name": "Whats a comp?",
	"start_date": "2019-05-17T22:52:50.825Z",
	"end_date":"2020-04-19T09:50:57.063Z", 
	"capacity": 10
}
```

* DELETE a training program
	* To delete training programs add the URL `training_programs/:id/delete`
*Will only delete program if its start date has not passed. Double check that selected program id has a start date in the future.*






