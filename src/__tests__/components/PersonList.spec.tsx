import React from 'react';
import { render, screen } from '@testing-library/react';
import PersonList from '../../components/PersonList';
import Api from '../../control/api';

jest.mock('../../control/api', () => {
	getPersons: () => [
		{
			authorizedName: {
				familyName: 'Anka',
				givenName: 'Kalle'
			}
		}
	];
});

describe('The PersonList component', () => {
	it('should render persons returned by api', () => {
		render(<PersonList />);

		const list = screen.getByRole('list');
		expect(list).toBeInTheDocument();
		const listItem = screen.getByRole('listitem');
		expect(listItem).toBeInTheDocument();
	});
});
