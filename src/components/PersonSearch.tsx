import React, { useState } from 'react';
import { searchPersonsByNameSearch } from '../control/api';
import Person from '../control/Person';
import PersonList from './PersonList';

const PersonSearch = () => {
	const [inputText, setInputText] = useState('');
	const [personName, setPersonName] = useState('');
	const [persons, setPersons] = useState([]);

	const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputText(event.target.value);
	};

	const handleSend = () => {
		// setInputText('');
		const personsPromise = searchPersonsByNameSearch(inputText);
		personsPromise.then((data: any) => {
			console.log(data);
			setPersons(data);
		});
	};

	return (
		<div>
			<h1>Person Search</h1>
			<input
				type="text"
				data-testid="searchInput"
				value={inputText}
				onChange={handleTextChange}
			/>
			<button type="submit" data-testid="sendButton" onClick={handleSend}>
				Send
			</button>

			<PersonList persons={persons} />
		</div>
	);
};

export default PersonSearch;
