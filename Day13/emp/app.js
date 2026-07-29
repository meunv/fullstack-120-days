/**
 * app.js
 * ---------------------------------------------------------
 * Responsibility (SRP): This is the ENTRY POINT of the
 * application — the only place that talks to the console.
 * It orchestrates calls into employeeService.js and handles
 * how success and error states are DISPLAYED to the user.
 *
 * Notice: app.js never validates data itself, never touches
 * the `employees` array directly, and never contains business
 * rules. It only "wires" everything together. This is the
 * same principle used in real backend frameworks, where a
 * "controller" delegates to a "service" layer.
 * ---------------------------------------------------------
 */

'use strict';

const employeeService = require('./employeeService');
const { AppError, formatCurrency } = require('./utils');

/**
 * Centralized error handler for the console app.
 * Distinguishes between expected "operational" errors
 * (AppError instances) and unexpected programming bugs.
 * This mirrors how production systems log/report errors
 * differently based on severity and origin.
 * @param {Error} error
 */
function handleError(error) {
  if (error instanceof AppError) {
    console.error(`\n❌ Error: ${error.message}`);
  } else {
    // Unexpected error — in a real app this would be logged
    // to a monitoring service (e.g., Sentry, CloudWatch) and
    // never expose internal details to the end user.
    console.error('\n❌ An unexpected error occurred. Please contact support.');
    console.error('[Internal]', error.message);
  }
}

/**
 * Prints a formatted list of all employees.
 */
function printAllEmployees() {
  const employees = employeeService.getAllEmployees();

  if (employees.length === 0) {
    console.log('\nNo employees found.');
    return;
  }

  console.log('\n=== Employee List ===');
  employees.forEach((emp, index) => {
    console.log(
      `${index + 1}. [ID: ${emp.id}] ${emp.name} | ${emp.department} | ${formatCurrency(emp.salary)} | ${emp.email}`
    );
  });
}

/**
 * Demonstrates adding a new employee with validation.
 */
function demoAddEmployee() {
  try {
    const newEmp = employeeService.addEmployee({
      name: 'Sneha Reddy',
      email: 'sneha.reddy@example.com',
      salary: 47000,
      department: 'Marketing',
    });
    console.log(`\n✅ Employee added: ${newEmp.name} (ID: ${newEmp.id})`);
  } catch (error) {
    handleError(error);
  }
}

/**
 * Demonstrates rejecting invalid input.
 */
function demoInvalidAdd() {
  try {
    employeeService.addEmployee({
      name: 'A1', // invalid: contains a digit
      email: 'not-an-email',
      salary: -500,
      department: '',
    });
  } catch (error) {
    handleError(error);
  }
}

/**
 * Demonstrates the salary increase workflow.
 */
function demoIncreaseSalary() {
  try {
    const updated = employeeService.increaseSalaryByName('Arun Kumar', 60000);
    console.log(`\n✅ Salary updated for ${updated.name}: ${formatCurrency(updated.salary)}`);
  } catch (error) {
    handleError(error);
  }

  try {
    // Intentionally trigger a "not found" error to show clean handling.
    employeeService.increaseSalaryByName('Nonexistent Person', 60000);
  } catch (error) {
    handleError(error);
  }
}

/**
 * Demonstrates deleting an employee.
 */
function demoDeleteEmployee() {
  try {
    const deleted = employeeService.deleteEmployee(3);
    console.log(`\n✅ Employee deleted: ${deleted.name} (ID: ${deleted.id})`);
  } catch (error) {
    handleError(error);
  }
}

/**
 * Main entry point — orchestrates the demo run.
 * Wrapped in a function (not run as loose top-level code) so
 * it can be imported and reused/tested without side effects.
 */
function main() {
  console.log('=========================================');
  console.log(' EMPLOYEE MANAGEMENT SYSTEM (Console Demo)');
  console.log('=========================================');

  printAllEmployees();
  demoAddEmployee();
  demoInvalidAdd();
  demoIncreaseSalary();
  demoDeleteEmployee();
  printAllEmployees();
}

// Only run main() if this file is executed directly (not imported),
// which is the standard Node.js pattern for reusable entry files.
if (require.main === module) {
  main();
}

module.exports = { main };
