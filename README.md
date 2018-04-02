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
    * To get all customers use the URL `/customers`
* GET all inactive customers
    * To get all customers who are inactive use the URL `/customers?inactive=true`
* GET single customer by customer ID
    * To get a single customer use the URL `/customers/:id` 
* POST
    * To post a new customer use the URL `/customers/new` 
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
	* To get all products use the URL `/products`
* GET single product by product ID
	* To get a single product use the url `/products/:id`
* POST
	* To post a new product use the URL `products/new`
    * Example keys:
```javascript
{
    "title": "Licensed Metal Chair",
    "price": "736.00",
    "description": "innovative unleash channels",
    "type_id": 9,
    "seller_id": 8
}

```
* PUT
	* To edit a product use the URL `/products/:id/edit`
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
    * To get all payment types use the URL `/payment`  
* GET single payment type by type ID
    * To get a single payment type by type_id use the URL`/payment/type/:id`  
* GET single payment type by customer ID
    * To get a single payment type by customer_id use the URL `/payment/customer/:customer_id` 
* POST
    * To post a new payment type use the URL `/payment/new`
	* Example keys:
```javascript
{ 
    "customer_id": 1,
    "type": 8,
    "account_number": 0
}
```
* PUT
	* To edit a payment type use the URL `/payment/:id/edit`
	* Example keys:
```javascript
{
    "type": 5
}
```
* DELETE
	* To delete a payment type use the URL `/payment/delete/:id`

### ORDERS

* GET all orders
	* To get all orders use the URL `/orders`
* GET single order by order ID
	* To get a single order with its products use the URL `/orders/:id`
* POST
	* To post a new order use the URL `/orders/new`
    * Example keys:
```javascript
{
    "customer_id": 33,
    "payment_type_id": 2,
    "order_date": "2017-03-14T14:39:53.094Z",
    "completed": 1
}
```
* PUT
	* To edit an order use the URL `/orders/:id/edit`
	* Example keys:
```javascript
{
    "order_date": "2017-05-14T14:39:53.094Z"
}
```
* DELETE
	* To delete an order use the URL `/orders/:id/delete`

### PRODUCT TYPE
* GET all product types
	* To get all product types use the URL `/prodtype/all` 
* GET single product type by type ID
	* To get a single product type use the URL `/prodtype/:id`
* POST
	* To post a new product type use the URL `/prodtype/new`
    * Example keys:
```javascript
{
	"type":"Cookies"
}
```
* PUT
	* To edit a product type use the URL `/prodtype/edit/:id`
	* Example keys:
```javascript
{
	"type":"Gravy"
}
```
	
* DELETE
	* To delete a product type use the URL `/prodtype/delete/:id`
	
### EMPLOYEES
* GET all employees
    * To get all employees add the URL`/employees`
* GET single employee by employee ID
    * To get a single employee use the URL `/employees/:id`
* POST
    * To post a new employee use the URL `/employees/new`
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
	* To edit an employee use the the URL `/employees/:id/edit`
    * Example  keys:
```javascript
{
    "first_name": "Margaret"
}
```

### DEPARTMENTS
* GET all departments
	* To get all departments use the URL `/departments`
* GET single department by department ID
	* To get a single department use the URL `/departments/:id`
* GET department employees by department ID
	* To get a department's employees use the url`/departments/:id/employees`
* POST
	* To post a new department use the URL `/departments/new`
	* Example  keys:
```javascript
{
    "dept_name": "payment Investor",
    "budget": 26330,
    "supervisor_id": 2
}
```
* PUT
	* To edit a department use the URL `/departments/:id/edit`
	* Example Keys:
```javascript
{
        "budget": 33333
}
```
### COMPUTERS
* GET all computers
	* To get all computers use the URL `/computers` 
* GET all active computers
	* To get all active computers use the URL  `/computers?active=true`  
* GET single computer by computer ID
	* To get single computer use the URL `/computers/:id` 
* POST
	* To post a new computer use the URL `/computers/new` 

    *only employee id is needed, purchase date will be automatically set to now, and trash date to undefined*

	* Example  keys:
```javascript
{
	"employee_id": 7
}
```
* PUT
	* To edit a computer use the URL `/computers/:id/edit`
	* Example keys:
```javascript
{
    "trash_date": "2019-05-17T21:52:50.825Z"
}
```
* DELETE
	* To delete a computer use the URL `computers/:id/delete`

### TRAINING PROGRAMS
* GET all training programs:
	* To get all training programs use the URL `/training_programs`
* GET all training programs with enrolled employees:
	* To get list of enrolled employees use the URL `/training_programs/employees`
* GET single training program by training program ID
	* To get a single training program use the URL: `/training_programs/:id`
* GET single training program with enrolled employees by training program ID
	* To get a single program with enrolled employees use the URL `/training_programs/program/:id`

*If null is returned, program does not have enrolled employees.*

*  GET single employee's training programs by employee ID
	* To get the training programs in which a single employee has enrolled use the URL `/training_programs/employee/:employee_id`

*If null is returned, employee has not enrolled in training programs.*

* POST new training program
	* To post a new program use the URL `/training_programs/new`
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
	* To edit a training program use the URL `/training_programs/:id/edit`
	* Example keys
```javascript
{
	"name": "Whats a comp?"

}
```

* DELETE a training program
	* To delete a training program use the URL `training_programs/:id/delete`

*Will only delete program if its start date has not passed. Double check that selected program id has a start date in the future.*






