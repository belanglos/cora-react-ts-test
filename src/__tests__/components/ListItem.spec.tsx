import React from 'react';
import { render, screen } from '@testing-library/react';
import ListItem from '../../components/ListItem';

describe('The ListItem component', () => {
	it('should render list item with prop', () => {
		render(<ListItem text="foo" />);

		const listItem = screen.getByRole('listitem');
		expect(listItem).toBeInTheDocument();
		expect(listItem).toHaveTextContent('foo');
	});

	it('should render list item with another prop', () => {
		render(<ListItem text="bar" />);

		const listItem = screen.getByRole('listitem');
		expect(listItem).toBeInTheDocument();
		expect(listItem).toHaveTextContent('bar');
	});
});
