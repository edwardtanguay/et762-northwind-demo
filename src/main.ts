import { DisplaySimpleEmployeeList, attachDisplaySimpleEmployeeListEvent } from './components/DisplaySimpleEmployeeList';
import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
	<div>
		<h1>Northwind Demo</h1>
		${DisplaySimpleEmployeeList()}
	</div>
`;

// attach events
attachDisplaySimpleEmployeeListEvent();
