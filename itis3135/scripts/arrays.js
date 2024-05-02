let persons = [];
let salaries = [];

function addSalary() {
  let personName = document.getElementById('personName').value.trim();
  let salary = parseFloat(document.getElementById('salary').value.trim());

  if (personName === '' || isNaN(salary)) {
    alert('Please enter valid values for name and salary.');
    return;
  }

  persons.push(personName);
  salaries.push(salary);

  document.getElementById('personName').value = '';
  document.getElementById('salary').value = '';

  document.getElementById('personName').focus();
}

function modifySalary() {
  let selectedPerson = document.getElementById('selectPerson').value;
  let newSalary = parseFloat(document.getElementById('newSalary').value.trim());

  if (isNaN(newSalary)) {
    alert('Please enter a valid salary.');
    return;
  }

  let index = persons.indexOf(selectedPerson);

  if (index !== -1) {
    salaries[index] = newSalary;
    alert('Salary modified successfully.');
  } else {
    alert('Selected person not found.');
  }

  document.getElementById('newSalary').value = '';
}

function displayResults() {
  let totalSalary = 0;
  let highestSalary = 0;

  for (let salary of salaries) {
    totalSalary += salary;
    if (salary > highestSalary) {
      highestSalary = salary;
    }
  }

  let averageSalary = totalSalary / salaries.length;

  document.getElementById('results').innerHTML = `
    <h2>Results</h2>
    <p>Average Salary: ${averageSalary.toFixed(2)}</p>
    <p>Highest Salary: ${highestSalary}</p>
  `;
}

function displaySalary() {
  let tableBody = document.getElementById('results_table_body');
  tableBody.innerHTML = '';

  for (let i = 0; i < persons.length; i++) {
    let row = `<tr><td>${persons[i]}</td><td>${salaries[i]}</td></tr>`;
    tableBody.innerHTML += row;
  }
}

 window.onload = function() {
  document.getElementById('personName').focus();
};