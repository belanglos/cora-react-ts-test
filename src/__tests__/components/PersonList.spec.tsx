import React from 'react';
import { render, screen } from '@testing-library/react';
import PersonList from '../../components/PersonList';
import Api from '../../control/api';

describe('The PersonList component', () => {
	jest.mock('../../control/api', () => {
		getPersons: jest.fn();
	});

	afterEach = () => {
		Api.getPersons.mockImplementation;
	};
	it('should output empty list if there are no persons returned by the api', () => {
		jest.mock('../../control/api', () => {
			getPersons: () => [];
		});

		render(<PersonList />);

		const lists = screen.getAllByRole('list');
		expect(lists).toHaveLength(1);
	});

	it('should render one person returned by api', () => {
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

		render(<PersonList />);

		const listItems = screen.getAllByRole('listitem');
		expect(listItems).toHaveLength(1);
		expect(listItems[0]).toHaveTextContent('Anka, Kalle');
	});

	it('should render several person returned by api', () => {
		jest.mock('../../control/api', () => {
			getPersons: () => [
				{
					authorizedName: {
						familyName: 'Anka',
						givenName: 'Kalle'
					}
				},
				{
					authorizedName: {
						familyName: 'Enequist',
						givenName: 'd'
					}
				},
				{
					authorizedName: {
						familyName: 'Ernman',
						givenName: 'Magdalena'
					}
				}
			];
		});

		render(<PersonList />);

		const listItems = screen.getAllByRole('listitem');
		expect(listItems).toHaveLength(3);
		expect(listItems[0]).toHaveTextContent('Anka, Kalle');
	});
});
