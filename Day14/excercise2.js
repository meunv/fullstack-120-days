function getNameWords(name) {
  return String(name).trim().toLowerCase().split(/\s+/).filter(Boolean);
}

function capitalize(word) {
  if (!word) return '';
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function buildDisplayName(words) {
  return words.map(capitalize).join(' ');
}

function buildUsername(words) {
  return words.join('.');
}

function buildEmail(username, domain = 'company.com') {
  return `${username}@${domain}`;
}

function padId(id, prefix, length = 5) {
  return `${prefix}-${String(id).padStart(length, '0')}`;
}

function toCleanUpperCase(value) {
  return String(value).trim().toUpperCase();
}

const employee ={
    id: 15,
    name: "   arun kumar   ",
    department: "it"
}

function formatEmployee(employee) {
  if (!employee || typeof employee !== 'object') {
    throw new Error('formatEmployee expects a valid employee object.');
  }

  const { id, name, department } = employee;

  const words = getNameWords(name);
  const employeeCode = padId(id, 'EMP');
  const cleanName = buildDisplayName(words);
  const username = buildUsername(words);
  const cleanDepartment = toCleanUpperCase(department);
  const email = buildEmail(username);

  return { employeeCode, cleanName, username, department: cleanDepartment, email };
}

console.log(formatEmployee(employee));

console.log(getNameWords("    arun kumar  "));
