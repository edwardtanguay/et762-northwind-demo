import employees from '../data/employees.json';

export const DisplayEmployeeByCity = (city: string) => {
	return /* html */ `
		<h2>Employees who live in ${city}</h2>

		${employees.filter(m => m.address.city === city).map((employee, index, arr) => {
			return `<div class="employee_id_${index}">${employee.firstName} ${employee.lastName} (${employee.address.city}) [employee ${index+1} of ${arr.length}]</div>`
		}).join('')}
	`;
}
