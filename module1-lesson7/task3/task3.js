const salaryOfJuniorDeveloper = 500
const numberOfJuniorDevelopers = 3
let taxPercentage = 13
let totalJuniorDevelopersSalary =
  salaryOfJuniorDeveloper * numberOfJuniorDevelopers
console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary)

for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
  const salaryWithTax =
    salaryOfJuniorDeveloper - (salaryOfJuniorDeveloper * taxPercentage) / 100
  console.log('salaryOfJuniorDeveloper', salaryOfJuniorDeveloper)
  console.log('salaryWithTax', salaryWithTax)
  totalJuniorDevelopersSalary += salaryWithTax
}
console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary)
