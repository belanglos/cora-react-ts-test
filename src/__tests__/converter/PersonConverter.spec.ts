import { convertPerson } from '../../converter/PersonConverter';
import Person from '../../control/Person';

const examplePerson = {
	name: 'person',
	children: [
		{
			name: 'recordInfo',
			children: [
				{
					name: 'id',
					value: 'authority-person:60944',
				},
				{
					name: 'type',
					children: [
						{
							name: 'linkedRecordType',
							value: 'recordType',
						},
						{
							name: 'linkedRecordId',
							value: 'person',
						},
					],
				},
				{
					name: 'dataDivider',
					children: [
						{
							name: 'linkedRecordType',
							value: 'system',
						},
						{
							name: 'linkedRecordId',
							value: 'diva',
						},
					],
				},
				{
					name: 'tsCreated',
					value: '2021-11-03T14:05:30.005Z',
				},
				{
					name: 'public',
					value: 'yes',
				},
				{
					name: 'domain',
					value: 'uu',
					repeatId: '0',
				},
			],
		},
		{
			name: 'authorisedName',
			children: [
				{
					name: 'familyName',
					value: 'Duck',
				},
				{
					name: 'givenName',
					value: 'Donald',
				},
			],
		},
		{
			name: 'personDomainPart',
			children: [
				{
					name: 'linkedRecordType',
					value: 'personDomainPart',
				},
				{
					name: 'linkedRecordId',
					value: 'authority-person:3454534:test',
				},
			],
			repeatId: '0',
		},
	],
};

describe('PersonConverter', () => {
	it('should accept an object', () => {
		// const person: Person = convertPerson(examplePerson);
		// expect(person.authorizedName.familyName).toBe('Duck');
		// expect(person).toBe.
		// const persons = api.getPersons();
		// expect(persons[0].authorizedName.familyName).toBe('Anka');
		// expect(persons[1].authorizedName.givenName).toBe('Gerd');
	});
});
