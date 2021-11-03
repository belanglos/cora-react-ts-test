import Person from '../control/Person';

export function convertPerson(coraPerson: any): Person {
	const person: Person = {
		id: '1',
		authorizedName: {
			familyName: 'Anka',
			givenName: 'Kalle',
		},
	};

	console.log(coraPerson);
	// console.log(person instanceof Person);

	return {
		id: '1',
		authorizedName: {
			familyName: 'Anka',
			givenName: 'Kalle',
		},
	};
}

export default { convertPerson };
