import React from 'react';
import Api from '../control/api';
import ListItem from './ListItem';

const PersonList = () => {
	const persons = Api.getPersons();

	return (
		<ul>
			{persons.map((person) => {
				return (
					<ListItem
						text={
							person.authorizedName.familyName +
							', ' +
							person.authorizedName.givenName
						}
					/>
				);
			})}
		</ul>
	);
};

export default PersonList;
