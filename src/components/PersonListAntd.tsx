import React from 'react';
import { List } from 'antd';
import Person from '../control/Person';

type Props = {
	persons: Person[];
};

const PersonList = (props: Props) => {
	const { persons } = props;

	return (
		<List
			itemLayout="horizontal"
			dataSource={persons}
			renderItem={(person) => (
				<List.Item>
					<List.Item.Meta
						avatar=""
						title={`${person.id}: ${person.authorizedName.familyName}, ${person.authorizedName.givenName}`}
						description={
							person.domains ? ` [${person.domains.join(', ')}]` : ''
						}
					/>
					{console.log(person.domains)}
				</List.Item>
			)}
		/>
		// <ul>
		// 	{persons.map((person) => {
		// 		let text = `${person.id}: ${person.authorizedName.familyName}, ${person.authorizedName.givenName}`;
		// 		text += person.domains ? ` [${person.domains.join(', ')}]` : '';
		// 		return <li key={person.id}>{text}</li>;
		// 	})}
		// </ul>
	);
};

export default PersonList;
