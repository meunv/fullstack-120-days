/**
 * employeeService.js
 * ---------------------------------------------------------
 * Responsibility (SRP): Contains ALL business logic related
 * to employees — adding, finding, updating, deleting, listing.
 * This is the "brain" of the application. It:
 *   - Uses validator.js to reject bad input BEFORE touching data.
 *   - Uses data.js as its only source of truth for storage.
 *   - Uses utils.js for cross-cutting helpers (errors, formatting).
 *   - Never talks directly to the console (that's app.js's job).
 *
 * Keeping business logic separate from I/O (console/UI) means
 * this module could be reused in a web server, a CLI, or a test
 * suite without changing a single line — a hallmark of clean
 * architecture.
 * ---------------------------------------------------------
 */

'use strict';

const { employees, getNextId } = require('./data');
const {
  isValidName,
  isValidEmail,
  isValidSalary,
  isValidDepartment,
  isValidId,
} = require('./validator');
const { AppError, safeTrim, deepClone } = require('./utils');

/**
 * Returns a defensive deep copy of all employees so external
 * code (app.js) cannot accidentally mutate internal state
 * directly — enforcing encapsulation.
 * @returns {Array<Object>}
 */
function getAllEmployees() {
  return deepClone(employees);
}

/**
 * Finds a single employee by ID.
 * @param {number} id
 * @returns {Object}
 * @throws {AppError} if id is invalid or employee not found
 */
function getEmployeeById(id) {
  if (!isValidId(id)) {
    throw new AppError('Invalid employee ID. ID must be a positive integer.', 400);
  }

  const employee = employees.find((emp) => emp.id === id);

  if (!employee) {
    throw new AppError(`Employee with ID ${id} not found.`, 404);
  }

  return deepClone(employee);
}

/**
 * Adds a new employee after validating every field.
 * Fails fast: the first invalid field stops execution and
 * throws a descriptive error, so the caller always knows
 * exactly what went wrong.
 * @param {Object} input
 * @returns {Object} the newly created employee
 * @throws {AppError}
 */
function addEmployee(input = {}) {
  const name = safeTrim(input.name);
  const email = safeTrim(input.email);
  const department = safeTrim(input.department);
  const salary = Number(input.salary);

  if (!isValidName(name)) {
    throw new AppError('Invalid name. Use 2-50 letters and spaces only.', 400);
  }
  if (!isValidEmail(email)) {
    throw new AppError('Invalid email format.', 400);
  }
  if (!isValidSalary(salary)) {
    throw new AppError('Invalid salary. Must be a positive number up to 1,00,00,000.', 400);
  }
  if (!isValidDepartment(department)) {
    throw new AppError('Invalid department. Use 2-30 letters, spaces, or "&".', 400);
  }

  // Prevent duplicate emails — a common real-world data integrity rule.
  const emailExists = employees.some(
    (emp) => emp.email.toLowerCase() === email.toLowerCase()
  );
  if (emailExists) {
    throw new AppError(`An employee with email "${email}" already exists.`, 409);
  }

  const newEmployee = {
    id: getNextId(),
    name,
    email,
    salary,
    department,
  };

  employees.push(newEmployee);
  return deepClone(newEmployee);
}

/**
 * Updates an existing employee's salary by name.
 * Demonstrates safe lookup + mutation with full validation,
 * fixing the classic bugs (undefined vars, misplaced `break`,
 * missing validation) from earlier versions of this function.
 * @param {string} empName
 * @param {number} newSalary
 * @returns {Object} the updated employee
 * @throws {AppError}
 */
function increaseSalaryByName(empName, newSalary) {
  const name = safeTrim(empName);

  if (!isValidName(name)) {
    throw new AppError('Invalid employee name provided.', 400);
  }
  if (!isValidSalary(newSalary)) {
    throw new AppError('Invalid new salary value.', 400);
  }

  const employee = employees.find(
    (emp) => emp.name.toLowerCase() === name.toLowerCase()
  );

  if (!employee) {
    throw new AppError(`Employee "${name}" not found. Salary not updated.`, 404);
  }

  employee.salary = newSalary;
  return deepClone(employee);
}

/**
 * Deletes an employee by ID.
 * @param {number} id
 * @returns {Object} the deleted employee
 * @throws {AppError}
 */
function deleteEmployee(id) {
  if (!isValidId(id)) {
    throw new AppError('Invalid employee ID.', 400);
  }

  const index = employees.findIndex((emp) => emp.id === id);

  if (index === -1) {
    throw new AppError(`Employee with ID ${id} not found.`, 404);
  }

  const [deleted] = employees.splice(index, 1);
  return deepClone(deleted);
}

module.exports = {
  getAllEmployees,
  getEmployeeById,
  addEmployee,
  increaseSalaryByName,
  deleteEmployee,
};
