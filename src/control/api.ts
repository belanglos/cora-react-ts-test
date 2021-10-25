import Person from './Person';

const DUMMY_PERSONS: Person[] = [
	{
		authorizedName: {
			familyName: 'Anka',
			givenName: 'Kalle',
		},
	},
	{
		authorizedName: {
			familyName: 'Enequist',
			givenName: 'Gerd',
		},
	},
	{
		authorizedName: {
			familyName: 'Ernman',
			givenName: 'Malena',
		},
	},
];

function getOrganisation() {
	return 'SomeOtherOrg';
}

function getPersons(): Person[] {
	return DUMMY_PERSONS;
}

export default { getOrganisation, getPersons };
