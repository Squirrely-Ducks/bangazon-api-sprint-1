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

### CUSTOMERS
* GET all customers
** To get all customers add `customers` to the URL
* GET single customer
** To get a single customer add `customers/:id` to the URL
* POST
* PUT

### PRODUCTS
* GET all products
* GET single product
* POST
* PUT
* DELETE

### PAYMENT TYPE
* GET all payment types
** To get all customers add `payment` to the URL
* GET single payment type by type ID
** To get a single payment type add `payment/type/:id` to the URL
* GET single payment type by customer ID
** To get a single payment type add `payment/customer/:id` to the URL
* POST
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
* GET single employee
* POST
* PUT

### DEPARTMENTS
* GET all departments
* GET single departments
* POST
* PUT


### COMPUTERS
* GET all computers
* GET single computers
* POST
* PUT
* DELETE

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




