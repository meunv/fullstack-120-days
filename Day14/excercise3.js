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

function formatSalary(amount, locale = 'en-IN', currency = 'INR') {
    const numericAmount = typeof amount === 'string' ? Number(amount.trim()) : amount;

    if (typeof numericAmount !== 'number' || !Number.isFinite(numericAmount)) {
        throw new Error(`Invalid salary value: "${amount}". Must be a finite number.`);
    }

    return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
    }).format(numericAmount);
}

function buildIsoDate(year, month, day) {
  const y = Number(year);
  const m = Number(month);
  const d = Number(day);

  const isValid =
    Number.isInteger(y) && y > 1900 && y < 2100 &&
    Number.isInteger(m) && m >= 1 && m <= 12 &&
    Number.isInteger(d) && d >= 1 && d <= 31;

  if (!isValid) {
    throw new Error(`Invalid date components: year=${year}, month=${month}, day=${day}`);
  }

  const mm = String(m).padStart(2, '0');
  const dd = String(d).padStart(2, '0');
  return `${y}-${mm}-${dd}`;
}

function normalizeJoiningDate(dateInput) {
    const value = String(dateInput).trim();

    const slashMatch = value.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    if (slashMatch) {
        const [, day, month, year] = slashMatch;
        return buildIsoDate(year, month, day);
    }

    const isoMatch = value.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
    if (isoMatch) {
        const [, year, month, day] = isoMatch;
        return buildIsoDate(year, month, day);
    }

    throw new Error(`Unsupported date format: "${dateInput}". Expected DD/MM/YYYY or YYYY-MM-DD.`);
}


function calculateExperience(joiningDateIso, referenceDate = new Date()) {
    const [year, month, day] = joiningDateIso.split('-').map(Number);
    const joiningDate = new Date(year, month - 1, day);

    let years = referenceDate.getFullYear() - joiningDate.getFullYear();
    let months = referenceDate.getMonth() - joiningDate.getMonth();

    if (referenceDate.getDate() < joiningDate.getDate()) {
        months -= 1;
    }

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    return `${years} Years ${months} Months`;
}

const employee ={
    id: 15,
    name: "   arun kumar   ",
    department: "it",
    salary: "145000.756",
    joiningDate: "12/05/2024"
}

function formatEmployee(employee) {
  if (!employee || typeof employee !== 'object') {
    throw new Error('formatEmployee expects a valid employee object.');
  }

  const { id, name, department, salary, joiningDate } = employee;

    const words = getNameWords(name);
    const employeeCode = padId(id, 'EMP');
    const cleanName = buildDisplayName(words);
    const username = buildUsername(words);
    const cleanDepartment = toCleanUpperCase(department);
    const email = buildEmail(username);
    const formattedSalary = formatSalary(salary);
    const normalizedJoiningDate = normalizeJoiningDate(joiningDate);
    const experience = calculateExperience(normalizedJoiningDate);

    return { employeeCode, cleanName, username, department: cleanDepartment, email, salary: formattedSalary, joiningDate: normalizedJoiningDate, experience };
}

console.log(formatEmployee(employee));


