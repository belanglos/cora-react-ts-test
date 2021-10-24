import Person from './Person'

var DUMMY_PERSONS = [
	new Person("Anka", "Kalle"),
	new Person("Enequist", "Gerd"),
	new Person("Ernman", "Malena")
]


function getOrganisation() {
    return 'SomeOtherOrg';
}

function getPersons(): Array<Person> {
	return DUMMY_PERSONS
}

export default { getOrganisation, getPersons };
