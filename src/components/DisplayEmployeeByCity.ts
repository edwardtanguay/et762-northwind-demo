import employees from '../data/employees.json';

export const DisplayEmployeeByCity = (city: string) => {
	return /* html */ `
		<h2>Employes who live in ${city}</h2>

		${employees.filter(m => m.address.city === city).map(employee => {
			return `<div>${employee.firstName} ${employee.lastName} (${employee.address.city})</div>`
		}).join('')}
	`;
}
