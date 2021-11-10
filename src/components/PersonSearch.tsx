import React, { useState } from 'react';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { searchPersonsByNameSearch } from '../control/api';
import PersonList from './PersonList';
import SimpleSearch from './SimpleSearch';

const PersonSearch = () => {
	const [inputText, setInputText] = useState('');
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

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.code === 'Enter') {
			handleSend();
		}
	};

	return (
		<div>
			<h1>Person Search</h1>
			{/* <input
				type="text"
				data-testid="searchInput"
				value={inputText}
				onChange={handleTextChange}
				onKeyPress={handleKeyPress}
			/> */}
			<SimpleSearch
				placeholder="Search Persons"
				ariaLabel="search persons"
				handleClick={handleSend}
			/>
			<button type="submit" data-testid="sendButton" onClick={handleSend}>
				Send
			</button>

			<PersonList persons={persons} />
		</div>
	);
};

export default PersonSearch;
