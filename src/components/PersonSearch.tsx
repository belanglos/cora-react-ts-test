import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

import React, { useState } from 'react';
import { searchPersonsByNameSearch } from '../control/api';
import PersonList from './PersonListAntd';

const { Search } = Input;

const suffix = (
	<AudioOutlined
		style={{
			fontSize: 16,
			color: '#1890ff',
		}}
	/>
);

const PersonSearch = () => {
	// const [inputText, setInputText] = useState('');
	const [persons, setPersons] = useState([]);

	// const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	setInputText(event.target.value);
	// };

	// const handleSend = () => {
	// 	// setInputText('');
	// 	const personsPromise = searchPersonsByNameSearch(inputText);
	// 	personsPromise.then((data: any) => {
	// 		console.log(data);
	// 		setPersons(data);
	// 	});
	// };

	const handleSearch = (search: string) => {
		// setInputText(search);
		const personsPromise = searchPersonsByNameSearch(search);
		personsPromise.then((data: any) => {
			console.log(data);
			setPersons(data);
		});
	};

	return (
		<div>
			<h1>Person Search</h1>
			{/* <input
				type="text"
				data-testid="searchInput"
				value={inputText}
				onChange={handleTextChange}
			/>
			<button type="submit" data-testid="sendButton" onClick={handleSend}>
				Send
			</button> */}
			<Search
				placeholder="input search text"
				allowClear
				onSearch={handleSearch}
				style={{ width: 200 }}
			/>

			{/* <Search
				placeholder="input search text"
				enterButton="Search"
				size="large"
				suffix={suffix}
				onSearch={handleSearch}
			/> */}

			<PersonList persons={persons} />
		</div>
	);
};

export default PersonSearch;
