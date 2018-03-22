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
As of now, all calls to the BangazonCorp API will be from `httt://localhost:????`

### CUSTOMERS
GET all customers
GET single customer
POST
PUT

### PRODUCTS
GET all products
GET single product
POST
PUT
DELETE

### PAYMENT TYPE
GET all payment types
GET single payment type
POST
PUT
DELETE

### ORDERS
GET all orders
GET single order
POST
PUT
DELETE

### PRODUCT TYPE
GET all product types
GET single product types
POST
PUT
DELETE

### EMPLOYEES
GET all employees
GET single employee
POST
PUT

### DEPARTMENTS
GET all departments
GET single departments
POST
PUT


### COMPUTERS
GET all computers
GET single computers
POST
PUT
DELETE

### TRAINING PROGRAMS
GET all training programs
GET single training program
POST
PUT
DELETE(only if date is in future)
