const tax_level1 = 20001;
const tax_level2 = 40001;
const tax_level3 = 80001;
const tax_level4 = 180001;

const tax_level1_rate = 0.1;
const tax_level2_rate = 0.2;
const tax_level3_rate = 0.3;
const tax_level4_rate = 0.4;

function calculateIncome(salary) {
  return salary / 12;
};

function calculateTax(salary){
  //做点啥
  let taxRange;
  let annulTax;

  if (salary > 180001) {
    taxRange = 4;
  } else if (salary > 80001) {
    taxRange = 3;
  } else if (salary > 40001) {
    taxRange = 2;
  } else if (salary > 20001) {
    taxRange = 1;
  } else {
    taxRange = 0;
  }

  switch (taxRange) {
    case 0:
      annulTax = 0;
    case 1:
      annulTax = (salary - 20000) * 0.1;
    case 2:
      annulTax = (salary - 40000) * 0.2 + 2000;
    case 3:
      annulTax = (salary - 80000) * 0.3 + 10000;
    case 4:
      annulTax = (salary - 180000) * 0.4 + 40000;
  }

  return annulTax;
};

function generateMonthlyPayslip(name, salary) {
  const income = calculateIncome(salary);
  const tax = calculateTax(salary);
  const netIncome = income - tax;

  return `
    Monthly Payslip for: "${name}"
    Gross Monthly Income: $${income}
    Monthly Income Tax: $${tax}
    Net Monthly Income: $${netIncome}
  `;
}

console.log(generateMonthlyPayslip('Mary Sony', 60000));