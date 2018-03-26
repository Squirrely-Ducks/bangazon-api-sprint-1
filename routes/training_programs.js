const { Router } = require("express");
const trainingProgramRouter = Router();
const { get_training_programs, get_training_employees, get_one_training_program, get_one_training_employees, get_employee_programs_list } = require('../controllers/training_program_ctrl');


// GET ALL TRAINING PROGRAMS
trainingProgramRouter.get("/training_programs", get_training_programs);
//GET ALL TRAINING PROGRAMS WITH LIST OF EMPLOYEES 
trainingProgramRouter.get("/training_programs/employees", get_training_employees);
//GET ONE TRAINING PROGRAM
trainingProgramRouter.get("/training_programs/:id", get_one_training_program);
//GET ONE TRAINING PROGRAM'S LIST OF EMPLOYEES
trainingProgramRouter.get("/training_programs/program/:id", get_one_training_employees);
//GET ONE EMPLOYEE'S LIST OF TRAINING PROGRAMS
trainingProgramRouter.get("/training_programs/employee/:id", get_employee_programs_list);


module.exports = trainingProgramRouter;