import { getFirstChildWithNameInData } from '../../converter/CoraDataUtils';
import { DataGroup, DataElement } from '../../converter/CoraData';

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

describe('getFirstChildWithNameInData', () => {
	it('should exist', () => {
		const dataGroupWithEmptyChildren: DataGroup = {
			name: 'SomeName',
		};

		const child: DataElement | undefined = getFirstChildWithNameInData(
			dataGroupWithEmptyChildren,
			'SomeName'
		);

		expect(child).toBe(undefined);

		// expect(person).toBe.
		// const persons = api.getPersons();
		// expect(persons[0].authorizedName.familyName).toBe('Anka');
		// expect(persons[1].authorizedName.givenName).toBe('Gerd');
	});
});
