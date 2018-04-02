const { Router } = require("express");
const trainingProgramRouter = Router();
const { get_training_programs, get_training_employees, get_one_training_program, get_one_training_employees, get_employee_programs_list, add_training_program, edit_training_program, delete_training_program } = require('../controllers/training_program_ctrl');


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
//ADD TRAINING PROGRAM
trainingProgramRouter.post("/training_programs/new", add_training_program);
// EDIT TRAINING PROGRAM
trainingProgramRouter.put("/training_programs/:id/edit", edit_training_program);
// DELETE TRAINING PROGRAM
trainingProgramRouter.delete("/training_programs/:id/delete", delete_training_program);

module.exports = trainingProgramRouter;