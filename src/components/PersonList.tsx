import React from 'react';
import Api from '../control/api';

const PersonList = () => {
	const persons = Api.getPersons();

	return (
		<ul>
			{persons.map((person) => {
				let text = `${person.id}: ${person.authorizedName.familyName}, ${person.authorizedName.givenName}`;
				text += person.domains ? ` [${person.domains.join(', ')}]` : '';
				return <li key={person.id}>{text}</li>;
			})}
		</ul>
	);
};

export default PersonList;
