const faker = require('faker');

let supCount = 0;

module.exports.generate_employee = () => {
  let employee = [];
  for (let i = 0; i < 50; i++) {
    supCount++ 
    let department_id = `${supCount<8 ? supCount : Math.floor(Math.random() * (7) + 1)}`;
    let first_name = faker.name.firstName();
    let last_name = faker.name.lastName();
    let job_title = faker.name.jobTitle();
    let is_supervisor = `${supCount<8 ? 1 : 0}`;
    
    employee.push({
      department_id,
      first_name,
      last_name,
      job_title,
      is_supervisor
    });
  }
  return employee;
};

