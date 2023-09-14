import { DisplayEmployeeByCity } from './components/DisplayEmployeeByCity';
import { DisplaySimpleEmployeeList, attachDisplaySimpleEmployeeListEvent } from './components/DisplaySimpleEmployeeList';
import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
	<div>
		<h1>Northwind Demo</h1>
		${DisplaySimpleEmployeeList()}
		${DisplayEmployeeByCity('London')}
		${DisplayEmployeeByCity('Redmond')}
		${DisplayEmployeeByCity('Seattle')}
	</div>
`;

// attach events
attachDisplaySimpleEmployeeListEvent();
