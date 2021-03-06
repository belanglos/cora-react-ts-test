import React from 'react';
import { render, screen } from '@testing-library/react';
import PersonList from '../../components/PersonList';
import { getPersons } from '../../control/api';

jest.mock('../../control/api');

const mockGetPersons = getPersons as jest.MockedFunction<typeof getPersons>;

describe('The PersonList component', () => {
	it('should output empty list if there are no persons returned by the api', () => {
		mockGetPersons.mockReturnValue([]);

		render(<PersonList />);

		const lists = screen.getAllByRole('list');
		expect(lists).toHaveLength(1);
	});

	it('should render one person returned by api', () => {
		mockGetPersons.mockReturnValue([
			{
				id: '1',
				authorizedName: {
					familyName: 'Anka',
					givenName: 'Kalle',
				},
			},
		]);

		render(<PersonList />);

		const listItems = screen.getAllByRole('listitem');
		expect(listItems).toHaveLength(1);
		expect(listItems[0]).toHaveTextContent('1: Anka, Kalle');
	});

	it('should render several persons returned by api', () => {
		mockGetPersons.mockReturnValue([
			{
				id: '1',
				authorizedName: {
					familyName: 'Anka',
					givenName: 'Kalle',
				},
			},
			{
				id: '2',
				authorizedName: {
					familyName: 'Enequist',
					givenName: 'Gerd',
				},
				domains: ['Uppsala Universitet'],
			},
			{
				id: '3',
				authorizedName: {
					familyName: 'Ernman',
					givenName: 'Malena',
				},
			},
		]);

		render(<PersonList />);

		const listItems = screen.getAllByRole('listitem');
		expect(listItems).toHaveLength(3);
		expect(listItems[0]).toHaveTextContent('1: Anka, Kalle');
		expect(listItems[2]).toHaveTextContent('3: Ernman, Malena');
	});

	it('should expose a domain in []', () => {
		mockGetPersons.mockReturnValue([
			{
				id: '1',
				authorizedName: {
					familyName: 'Anka',
					givenName: 'Kalle',
				},
				domains: ['Uppsala Universitet'],
			},
		]);

		render(<PersonList />);

		const listItems = screen.getAllByRole('listitem');
		expect(listItems).toHaveLength(1);
		expect(listItems[0]).toHaveTextContent(
			'1: Anka, Kalle [Uppsala Universitet]'
		);
	});

	it('should expose several domains in []', () => {
		mockGetPersons.mockReturnValue([
			{
				id: '1',
				authorizedName: {
					familyName: 'Anka',
					givenName: 'Kalle',
				},
				domains: ['Uppsala Universitet', 'Test'],
			},
		]);

		render(<PersonList />);

		const listItems = screen.getAllByRole('listitem');
		expect(listItems).toHaveLength(1);
		expect(listItems[0]).toHaveTextContent(
			'1: Anka, Kalle [Uppsala Universitet, Test]'
		);
	});

	it('should not expose a domain of domain array empty', () => {
		mockGetPersons.mockReturnValue([
			{
				id: '1',
				authorizedName: {
					familyName: 'Anka',
					givenName: 'Kalle',
				},
				domains: [],
			},
		]);

		render(<PersonList />);

		const listItems = screen.getAllByRole('listitem');
		expect(listItems).toHaveLength(1);
		expect(listItems[0]).toHaveTextContent('1: Anka, Kalle');
	});
});
