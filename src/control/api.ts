import { DataAtomic, DataGroup } from '../converter/CoraData';
import Person from './Person';
import { getFirstChildWithNameInData } from '../converter/CoraDataUtils';

const DUMMY_PERSONS: Person[] = [
	{
		id: '1',
		authorizedName: {
			familyName: 'Anka',
			givenName: 'Kalle',
		},
	},
	{
		id: '2',
		authorizedName: {
			familyName: 'Enequist',
			givenName: 'Gerd',
		},
		domains: ['Uppsala Universitet', 'Test'],
	},
	{
		id: '3',
		authorizedName: {
			familyName: 'Ernman',
			givenName: 'Malena',
		},
	},
];

function getOrganisation() {
	return 'SomeOtherOrg';
}

export function getPersons(): Person[] {
	return DUMMY_PERSONS;
}

export function searchPersonsByNameSearch(searchTerm: string): Promise {
	const baseUrl = 'https://cora.test.diva-portal.org/diva/rest/';
	const searchEndpoint = 'record/searchResult/';
	const nameSearch = `publicPersonSearch?searchData={"name":"search","children":[{"name":"include","children":[{"name":"includePart","children":[{"name":"personNameSearchTerm","value":"${searchTerm}"}]}]}]}`;

	const completeUrl = baseUrl + searchEndpoint + nameSearch;

	return fetch(completeUrl)
		.then((result) => {
			return result.json();
		})
		.then((data) => {
			console.log(data);
			const personArray = data.dataList.data;

			const returnedPersons: Person[] = personArray.map((row: any) => {
				const dataGroup: DataGroup = row.record.data;
				console.log(dataGroup);
				const authorisedName: DataGroup = getFirstChildWithNameInData(
					dataGroup,
					'authorisedName'
				);
				console.log(authorisedName);
				const familyName: DataAtomic = getFirstChildWithNameInData(
					authorisedName,
					'familyName'
				);
				const givenName: DataAtomic = getFirstChildWithNameInData(
					authorisedName,
					'givenName'
				);
				console.log(familyName.value, givenName.value);

				const recordInfo: DataGroup = getFirstChildWithNameInData(
					dataGroup,
					'recordInfo'
				);

				const idAtomic: DataAtomic = getFirstChildWithNameInData(
					recordInfo,
					'id'
				);

				console.log(idAtomic.value);

				return {
					id: idAtomic.value,
					authorizedName: {
						givenName: givenName.value,
						familyName: familyName.value,
					},
				};
			});

			return returnedPersons;
		});
}

export default { getOrganisation, getPersons, searchPersonsByNameSearch };
