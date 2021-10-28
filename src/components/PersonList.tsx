import React from 'react';
import Api from '../control/api';

const PersonList = () => {
	const persons = Api.getPersons();

	return (
		<ul>
			{persons.map((person) => {
				return (
					<li key={person.id} data-foo="bar">
						{`${person.id}: ${person.authorizedName.familyName}, ${person.authorizedName.givenName}`}
					</li>
				);
			})}
		</ul>
	);
};

export default PersonList;
