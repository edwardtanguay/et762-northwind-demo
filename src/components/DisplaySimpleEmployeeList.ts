import employees from '../data/employees.json';

export const DisplaySimpleEmployeeList = () => {
	return /* html */ `
		<h2>Simple Employee List</h2>
		<hr/>
		<button class="btnTest">test</button>
		<div class="message"></div>
		<hr/>

		<h3>There are ${employees.length} employees:</h3>	
		${employees.map(employee => {
			return `<div>${employee.firstName} ${employee.lastName} (${employee.address.city})</div>`
		}).join('')}
	`;
}

export const attachDisplaySimpleEmployeeListEvent = () => {
	const btnTestElem = document.querySelector('.btnTest');
	const messageElem = document.querySelector<HTMLDivElement>('.message');

	if (messageElem) {
		btnTestElem?.addEventListener('click', () => {
			messageElem.innerText= 'test successful';
		})
	}
}