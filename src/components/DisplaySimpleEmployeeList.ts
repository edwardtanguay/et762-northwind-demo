export const DisplaySimpleEmployeeList = () => {
	return /* html */ `
		<h2>Simple Employee List</h2>	
		<p>test</p>
		<button class="btnTest">test</button>
		<div class="message"></div>
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