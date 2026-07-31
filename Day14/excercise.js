//String, Date & Number Functions

const employee ={
    id: 15,
    name: "   arun kumar   ",
    department: "it"
}

function formatEmployee(employee) {
  if (!employee || typeof employee !== 'object') {
    throw new Error('Not a valid employee object.');
  }

  const { id, name, department } = employee;

  // 1. Employee code: numeric id -> "EMP-00015"
  const employeeCode = `EMP-${String(id).padStart(5, '0')}`;

  // 2. Clean name: trim whitespace, lowercase, split into words,
  //    capitalize each word, rejoin with a single space.
  const words = String(name).trim().toLowerCase().split(/\s+/);
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  const cleanName = capitalizedWords.join(' ');

  // 3. Username: lowercase words joined with a dot -> "arun.kumar"
  const username = words.join('.');

  // 4. Department: standardized to uppercase -> "IT"
  const cleanDepartment = String(department).trim().toUpperCase();

  // 5. Email: built from the username + fixed company domain.
  const email = `${username}@company.com`;

  return {
    employeeCode,
    cleanName,
    username,
    department: cleanDepartment,
    email,
  };
}

console.log(formatEmployee(employee));