// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let student = [
  {studentName: "Portia", studentSurname: "Mashaba", Age: 28},
  {studentName: "Xolisile", studentSurname: "Ubisi", Age: 21},
  {studentName: "Khuliso", studentSurname: "Smith", Age: 14},
  {studentName: "Khuliso", studentSurname: "Smith", Age: 30}, 
  {studentName: "Thembi", studentSurname: "Maseko", Age: 48},
  {studentName: "Faith", studentSurname: "Letswalo", Age: 7},
  {studentName: "Palesa", studentSurname: "Msiza", Age: 8},
  {studentName: "Lerato", studentSurname: "Smith", Age: 9},
  {studentName: "Lethabo", studentSurname: "Bongo", Age: 10}, 
  {studentName: "Thabo", studentSurname: "Maseko", Age: 15}
];

let counter = 0;
for (let i = 0; i < student.length; i++) {
  if (student[i].Age <= 10) counter++;
}

console.log(counter);