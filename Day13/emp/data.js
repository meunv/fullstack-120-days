/**
 * data.js
 * ---------------------------------------------------------
 * Responsibility (SRP): Acts as the in-memory "database" layer.
 * In a real application this would be replaced by a database
 * connection (e.g., MongoDB, PostgreSQL). By isolating data
 * storage here, the rest of the app never needs to know HOW
 * data is stored — only that it can be retrieved and mutated
 * through this module. This is the core idea behind
 * Separation of Concerns.
 * ---------------------------------------------------------
 */

'use strict';

// Using Object.freeze on the array reference itself is not useful
// (arrays are mutable even when frozen at top level), so instead
// we simply export the array and control all access to it through
// employeeService.js — no other file should mutate this directly.
const employees = [
  { id: 1, name: 'Arun Kumar', email: 'arun.kumar@example.com', salary: 45000, department: 'Engineering' },
  { id: 2, name: 'Priya Sharma', email: 'priya.sharma@example.com', salary: 52000, department: 'Finance' },
  { id: 3, name: 'Rahul Verma', email: 'rahul.verma@example.com', salary: 38000, department: 'HR' },
];

// Simple auto-increment counter to generate unique IDs safely.
let nextId = employees.length + 1;

function getNextId() {
  return nextId++;
}

module.exports = {
  employees,
  getNextId,
};
