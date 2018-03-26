# Bangazon API
    Welcome to the Bangazon Corporation API. The purpose of the API is to allow the user to GET/POST/PUT/DELETE from the Banagazon Database. Instructions below are required before the API can be initialized and accessed.

## Steps for Installation:
In your terminal enter the following commands to gain access to the BangazonCorp API:
1. ``` git clone https://github.com/Squirrely-Ducks/bangazon-api-sprint-1.git ```
2. ``` npm init -y ```
>Initialize Node Packet Manager
3. ``` npm install ```
>Installs all the Node Packets that are required as dependancies in the package.json file.
Your environment is now set up run the BangazonCorp API

## Initializing and Seeding the BangazonCorp Database
As it stands, the database will be hosted locally on you machine.
In order to initialize and seed the database you will need to enter a few simple commands. In your terminal, enter the following commands:
    1. ` node data/execute_data.js `
    >This will create all the necessary JSON files with randomized data to get you started
    2. ` node db/build_db.js `
    >This will insert the randomized data into the SQLite DataBase
## Usage of API
As of now, all calls to the BangazonCorp API will be from `http://localhost:4200/api/v1/`
To begin enter the following command to initialize the server `nodemon app.js`
### CUSTOMERS
* GET all customers
    ** To get all customers add `customers` to the URL
* GET single customer
    ** To get a single customer add `customers/:id` to the URL
* POST
    ** To post a new product, use the URL(in Postman or something similar) `product/new` to post a new object with the following keys:{
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
* PUT

### PRODUCTS
* GET all products
    * To access all products enter address `/products`
* GET single product by product_id
    * To access a single product by product_ID `/products/:id`
* POST
    * To post a new product, use the URL(in Postman or something similar) `product/new` to post a new object with the following keys:```{
                                "title": "new info",
                                "price": new info,
                                "description": "new info",
                                "type_id": new info,
                                "seller_id": new info
                            }```
* PUT
* DELETE

### PAYMENT TYPE
* GET all payment types
    * To get all customers add `/payment` to the URL
* GET single payment type by type ID
    * To get a single payment type add `/payment/type/:id` to the URL
* GET single payment type by customer ID
    * To get a single payment type add `/payment/customer/:id` to the URL
* POST
    * To post a new payment type, use the URL(in Postman or something similar) `/payment/new` to post a new object with the following keys:```{ 
                                'customer_id': new info,
                                'type': new info,
                                'account_number': new info
                            }```
* PUT
* DELETE

### ORDERS
* GET all orders
* GET single order
* POST
* PUT
* DELETE

### PRODUCT TYPE
* GET all product types
* GET single product types
* POST
* PUT
* DELETE

### EMPLOYEES
* GET all employees
    ** To get all customers add `/employees` to the URL
* GET single employee
    * To get a single customer by id add `/employees/:id` to the URL
* POST
    * To post a new product, use the URL(in Postman or something similar) `product/new` to post a new object with the following keys:{
                                "deparment_id": new info,
                                "first_name": "new info",
                                "last_name": "new info",
                                "job_title": "new info",
                                "is_supervisor": new info
                            }
* PUT

### DEPARTMENTS
* GET all departments
* GET single departments
* POST
* PUT


### COMPUTERS
* GET all computers
	* To get all computers add `/computer` to the URL
* GET single computers
	* To get single computer by id add `/computer/:id` to the URL
* POST
	* To post a new computer use the URL(in Postman or something similar) `computer/new` to post a new object with the following keys:{
                               "${purchase_date}": new info,
           			"${trash_date}": new info,
            			${employee_id}): new info
                            }
* PUT
	* To edit a computer's info:
	1. Edit program information, choose desired training program id and use the following path:
```javascript
http://localhost:4200/api/v1/computer/:id/edit
```
- Enter into the body, any or all of the following values you would like to edit. Dummy data for example
```javascript
{
	"${purchase_date}": 2018-05-17T22:52:50.825Z,
        "${trash_date}": 2019-05-17T21:52:50.825Z,
         ${employee_id}): 6
}
```
* DELETE
	* To delete a computer, choose desired computer id and enter the following link into Postman with select id:
```javascript
http://localhost:4200/api/v1/computer/:id/delete
```

### TRAINING PROGRAMS
#### GET all training programs:
1. To get list of all training programs:
```javascript
http://localhost:4200/api/v1/training_programs/:id
```

2. To get list of training programs with enrolled employees:
```javascript
http://localhost:4200/api/v1/training_programs/employees
```

#### GET single training program
1. To get one training program:
```javascript
http://localhost:4200/api/v1/training_programs/:id
```

2. To get one training program with enrolled employees:
```javascript
http://localhost:4200/api/v1/training_programs/program/:id
```
If null is returned, program does not have enrolled employees.

3. To get list of enrolled training programs by one employee:
```javascript
http://localhost:4200/api/v1/training_programs/program/:id
```
If null is returned, employee has not enrolled in training programs.

* POST
* PUT
* DELETE(only if date is in future)

#### POST new training program
1. To add a new program, use the following path:
```javascript
http://localhost:4200/api/v1/training_programs/new
```
- Enter data into the body, for example:
```javascript
{
	"name": "Whats a computer 101?",
	"start_date": "2018-05-17T22:52:50.825Z",
	"end_date":"2019-04-19T09:52:57.063Z", 
	"capacity": 20
}
```
- Check database, if program has been posted.

#### PUT edit training program

1. Edit program information, choose desired training program id and use the following path:
```javascript
http://localhost:4200/api/v1/training_programs/:id/edit
```
- Enter into the body, any or all of the following values you would like to edit. Dummy data for example
```javascript
{
	"name": "Whats a comp?",
	"start_date": "2019-05-17T22:52:50.825Z",
	"end_date":"2020-04-19T09:50:57.063Z", 
	"capacity": 10
}
```
- Check database to see if data has updated

#### DELETE a training program

4. To delete training programs,  choose desired training program id and enter the following link into Postman with select id:
```javascript
http://localhost:4200/api/v1/training_programs/:id/delete
```
- Will only delete program if its start date has not passed. Double check that selected program id has a start date in the future.






