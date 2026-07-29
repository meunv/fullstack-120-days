/**
 * validator.js
 * ---------------------------------------------------------
 * Responsibility (SRP): This module has exactly ONE job —
 * validate input data. It knows nothing about employees,
 * arrays, or business logic. It only answers yes/no questions
 * about whether a piece of data is well-formed.
 *
 * Why separate validation into its own module?
 * 1. Reusability: Any part of the app (or a future app) can
 *    reuse these checks without duplicating regex/logic.
 * 2. Testability: Pure functions with no side effects are the
 *    easiest kind of code to unit test.
 * 3. Security: Centralizing validation means there is only
 *    ONE place to fix a security bug (e.g., a weak regex),
 *    instead of hunting through the whole codebase.
 * ---------------------------------------------------------
 */

'use strict';

// Only letters and spaces, 2-50 characters. Prevents empty
// strings, numbers, and script-injection-style payloads from
// being accepted as a "name".
const NAME_REGEX = /^[A-Za-z ]{2,50}$/;

// Reasonably strict email pattern. Not fully RFC 5322 compliant
// (nothing simple is), but good enough to catch common mistakes
// and malformed input before it reaches business logic.
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validates an employee name.
 * @param {*} name - raw input, could be anything (unsafe by default)
 * @returns {boolean}
 */
function isValidName(name) {
  return typeof name === 'string' && NAME_REGEX.test(name.trim());
}

/**
 * Validates an email address.
 * @param {*} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  return typeof email === 'string' && EMAIL_REGEX.test(email.trim());
}

/**
 * Validates a salary value.
 * Rules: must be a finite number, greater than 0, and below an
 * upper sanity bound to guard against typos like extra zeros.
 * @param {*} salary
 * @returns {boolean}
 */
function isValidSalary(salary) {
  return (
    typeof salary === 'number' &&
    Number.isFinite(salary) &&
    salary > 0 &&
    salary <= 10000000
  );
}

/**
 * Validates a department name. Kept simple and reusable —
 * allows letters, spaces, and ampersands (e.g. "R&D").
 * @param {*} department
 * @returns {boolean}
 */
function isValidDepartment(department) {
  return (
    typeof department === 'string' &&
    /^[A-Za-z& ]{2,30}$/.test(department.trim())
  );
}

/**
 * Validates that an ID is a positive integer.
 * Guards against negative numbers, decimals, or non-numeric input
 * being used to look up records (a common source of bugs and
 * injection-style attacks in real systems).
 * @param {*} id
 * @returns {boolean}
 */
function isValidId(id) {
  return Number.isInteger(id) && id > 0;
}

module.exports = {
  isValidName,
  isValidEmail,
  isValidSalary,
  isValidDepartment,
  isValidId,
};
