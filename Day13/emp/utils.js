/**
 * utils.js
 * ---------------------------------------------------------
 * Responsibility (SRP): Generic, reusable helper functions
 * that don't belong to any specific business domain (not
 * employee-specific, not validation-specific). Think of this
 * as your "toolbox" module.
 * ---------------------------------------------------------
 */

'use strict';

/**
 * Custom Error class for application-level errors.
 * Extending the native Error class is an industry-standard
 * pattern: it lets calling code distinguish between expected,
 * "operational" errors (bad input, not found, etc.) and
 * unexpected programming bugs, using `instanceof`.
 */
class AppError extends Error {
  constructor(message, statusCode = 400) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.isOperational = true; // marks this as a known, handled error
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Safely trims a string input, returning an empty string for
 * anything that isn't a string. Prevents crashes like
 * `undefined.trim()` when unexpected input types slip through.
 * @param {*} value
 * @returns {string}
 */
function safeTrim(value) {
  return typeof value === 'string' ? value.trim() : '';
}

/**
 * Formats a number as Indian Rupee currency for clean console output.
 * @param {number} amount
 * @returns {string}
 */
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Deep clones a plain object/array to avoid accidental mutation
 * of shared references (see: shallow vs deep copy pitfalls).
 * Falls back gracefully if structuredClone isn't available.
 * @param {*} value
 * @returns {*}
 */
function deepClone(value) {
  if (typeof structuredClone === 'function') {
    return structuredClone(value);
  }
  return JSON.parse(JSON.stringify(value));
}

module.exports = {
  AppError,
  safeTrim,
  formatCurrency,
  deepClone,
};
