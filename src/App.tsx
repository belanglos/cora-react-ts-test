import React from 'react';
import { styled } from './stitches.config';
// import OrganisationSearch from './OrganisationSearch';
import PersonList from './components/PersonList';

const Title = styled('h1', {
	color: '$accentColour',
	fontSize: '$100',
});

function App() {
	return (
		<div>
			<Title>DiVA</Title>
			<PersonList />
		</div>
	);
}

export default App;
