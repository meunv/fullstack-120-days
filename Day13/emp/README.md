# Employee Management System (Console App)

A plain JavaScript (Node.js) console application demonstrating how to
structure a small but *real-world-style* project using clean architecture
principles. This project intentionally avoids frameworks so the underlying
software engineering concepts are easy to see and learn.

## Project Structure

```
employee-management/
│
├── app.js               # Entry point — handles console I/O only
├── employeeService.js    # Business logic layer
├── validator.js          # Input validation layer
├── utils.js              # Generic reusable helpers + custom errors
├── data.js               # In-memory "database" layer
└── README.md
```

## How to Run

```bash
node app.js
```

No dependencies or installation required — this uses only native Node.js
and JavaScript features.

---

## Core Concepts Explained

### 1. Separation of Concerns

Each file has a distinct, non-overlapping job:

| File | Concern |
|---|---|
| `data.js` | Where data lives |
| `validator.js` | Whether data is *valid* |
| `utils.js` | Generic tools everyone can reuse |
| `employeeService.js` | What *business rules* apply to data |
| `app.js` | How the user *sees and interacts with* the app |

If you wanted to swap the console for a web UI tomorrow, you would only
need to rewrite `app.js`. Everything else — validation, business logic,
data access — stays exactly the same. That is the entire point of
separating concerns: **change in one layer should not force changes in
another.**

### 2. Single Responsibility Principle (SRP)

SRP states: *a module/function should have one, and only one, reason to
change.* Look at `addEmployee()` in `employeeService.js` — it doesn't
format console output, doesn't decide what a "valid" name looks like
(that's `validator.js`'s job), and doesn't know how data is physically
stored (that's `data.js`'s job). It only coordinates: validate → check
business rules → save. If salary rules change, you touch
`employeeService.js`. If the definition of a "valid name" changes, you
touch `validator.js` only.

### 3. Reusable Modules

`validator.js` and `utils.js` contain **pure functions** — functions that
take input and return output without side effects or dependency on
external state. Pure functions are the easiest kind of code to reuse,
because they behave predictably no matter where they're called from
(this console app, a future web API, or automated tests).

### 4. Input Validation

Every public function in `employeeService.js` validates its inputs
*before* doing anything else — this is called **failing fast**. Key
practices demonstrated:

- Type checking (`typeof name === 'string'`) before regex testing, to
  avoid runtime crashes on `undefined` or `null`.
- Regex whitelisting (`^[A-Za-z ]{2,50}$`) instead of blacklisting bad
  characters — it's far safer to explicitly allow only what you expect
  than to try to block every possible bad input.
- Range checks on numbers (salary must be `> 0` and below a sane upper
  bound) to catch typos and abuse.
- Duplicate checks (unique email) to preserve data integrity.

### 5. Clean Error Handling

This project uses a **custom error class**, `AppError`, extending the
built-in `Error`. Why this matters:

- It lets `app.js` distinguish between *expected* errors (bad input,
  "not found") and *unexpected* bugs, using `error instanceof AppError`.
- Expected errors show a friendly message to the user.
- Unexpected errors are logged internally but never expose raw stack
  traces or implementation details to the end user — a basic but
  important security practice.
- Every function that can fail throws a *descriptive*, specific error
  instead of returning `null`, `undefined`, or `-1`, which are easy to
  ignore accidentally and lead to silent bugs.

### 6. Secure Coding Practices

- **Whitelist validation** (regex-based) instead of trying to strip out
  "bad" characters, which is much easier to get wrong.
- **Defensive copying**: `getAllEmployees()` and other read functions
  return a `deepClone()` of the data instead of the live array/objects.
  This prevents external code from mutating internal state by holding a
  reference to it (the exact reference-vs-copy pitfall demonstrated
  earlier with arrays and nested objects).
- **No direct access to `data.js`**: `app.js` never imports `data.js`
  directly. All access goes through `employeeService.js`, which enforces
  validation and business rules — this is a form of *encapsulation*.
- **No sensitive data leakage in errors**: internal error messages are
  logged separately from user-facing ones.

### 7. Code Organization Used in Real Projects

This structure mirrors common patterns in production Node.js apps
(e.g., Express APIs):

```
Controller (app.js)  →  Service (employeeService.js)  →  Data Layer (data.js)
                              ↑
                        Validator (validator.js)
                              ↑
                         Utils (utils.js)
```

Data flows one direction, and each layer only knows about the layer
directly below it — never skips layers or reaches "sideways." This
predictable flow makes large codebases much easier to debug and extend.

---

## Key Takeaways

- Small, focused files are easier to test, debug, and hand off to other
  developers than one giant script.
- Validating input early (fail fast) prevents corrupted data from ever
  entering your system.
- Custom error classes make error handling explicit and predictable
  instead of relying on generic `throw new Error()` or magic return
  values.
- Defensive copying (`deepClone`) protects your internal data from
  accidental external mutation — a lesson learned directly from how
  JavaScript arrays and objects are copied by reference, not by value.
