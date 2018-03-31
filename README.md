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
* GET all customers who are inactive
    * To get all customers add the URL `customers?inactive=true`
* GET single customer
    * To get a single customer add the URL `customers/:id` 
* POST
    * To post a new product, use the URL `customers/new` 
    * Example  keys:
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
	* To post a new product use the URL `products/new`
    * Example  keys:
```javascript
{
    "title": "new info",
	"price": 10000,
	"description": "new info",
	"type_id": 1,
	"seller_id": 3
}
```
* PUT
	* To edit a new product use the URL `/products/:id/edit`
	* Example keys:
```javascript
{
	"title": "Incredible Fresh Car"
}
```
* DELETE
	* to delete a product use the URL `/products/:id/delete`
	
### PAYMENT TYPE
* GET all payment types
    * To get all payment types add the URL `/payment`  
* GET single payment type by type ID
    * To get a single payment type add the URL`/payment/type/:id`  
* GET single payment type by customer ID
    * To get a single payment type add the URL `/payment/customer/:customer_id` 
* POST
    * To post a new payment type, add the URL `/payment/new`
	* Example keys:
```javascript
{ 
	"customer_id": 1,
	"type": 3,
	"account_number": 7
}
```
* PUT
	* To edit a payment type add the URL `/payment/:id/edit`
	* Example keys:
```javascript
{
    "type": 5
}
```
* DELETE
	* To delete a payment type add the URL `/payment/delete/:id`

### ORDERS
* GET 
	* To get all orders add the URL `/orders`
* GET 
	* To get a single order with its products add the URL `orders/:id`
* POST
	* To get add a new orders add the URL `orders/new`
    * Example  keys:
```javascript
{
	"customer_id": 33,
	"payment_type_id": 2,
	"order_date": "2017-03-14T14:39:53.094Z",
    "completed": 1
}
```
* PUT
	* To edit an order add the URL `orders/:id/edit`
	* Example keys:
```javascript
{
"order_date": "right now"
}
```
* DELETE
	* To delete an order add the URL: `orders/:id/delete`

### PRODUCT TYPE
* GET all product types
	* To get all product types add the URl `/prodtype/all` 
* GET single product types
	* To get single product types add the URL `/prodtype/:id`
* POST
	* To add a product type add the URL `/prodtype/new`
    * Example  keys:
```javascript
{
	"type":"Cookies"
}
```
* PUT
	* To edit a product type add the URL `/prodtype/edit/:id`
	* Example keys:
```javascript
{
	"type":"Crackers"
}
```
	
* DELETE
	* To edit a product type use the URL `/prodtype/delete/:id`
	
### EMPLOYEES
* GET all employees
    * To get all employees add the URL`/employees`
* GET single employee
    * To get a single employee by id add the URL `/employees/:id`
* POST
    * To post a new employee with the following keys:
    * Example  keys:
```javascript
{
	"department_id": "1",
    "first_name": "Greta",
	"last_name": "Schoen",
    "job_title": "Future Applications Orchestrator"
}
```
* PUT
	* To edit an employee add the the URL `/employees/:id/edit`
    * Example  keys:
```javascript
{
    "first_name": "Margaret"
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
	* Example  keys:
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
        "budget": 33333
}
```
### COMPUTERS
* GET all computers
	* To get all computers add to the URL `/computers` 
* GET all active computers
	* To get all computers add to the URL  `/computers?active=true`  
* GET single computers
	* To get single computer by id add to the URL `/computers/:id` 
* POST
	* To post a new computer use the URL`computers/new` 
    *only employee id is needed, purchase date will be automatically set to now, and trash date to undefined*
	* Example  keys:
```javascript
{
	"employee_id": 7
}
```
* PUT
	* To edit a computer add the URL `/computers/:id/edit`
	* Example keys:
```javascript
{
    "trash_date": "2019-05-17T21:52:50.825Z"
}
```
* DELETE
	* To delete a computer add the URL `computers/:id/delete`

### TRAINING PROGRAMS
* GET all training programs:
	* To get list of all training programs add the URL `/training_programs/`
* GET all training programs with enrolled employees:
	* To get list of enrolled employess add the URL `/training_programs/employees`
* GET single training program
	* To get one training program add the URL: `/training_programs/:id`
* GET one training program with enrolled employees:
	* To get a single program's enrolled employees add the URL `/training_programs/program/:id`
*If null is returned, program does not have enrolled employees.*
*  GET one employee's training programs 
	* To get list of enrolled training programs by one employee add the URL `/training_programs/employee/:employee_id`
*If null is returned, employee has not enrolled in training programs.*

* POST new training program
	* To add a new program add the URL `/training_programs/new`
	* Example keys:
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
	"name": "Whats a comp?"

}
```

* DELETE a training program
	* To delete training programs add the URL `training_programs/:id/delete`
*Will only delete program if its start date has not passed. Double check that selected program id has a start date in the future.*






