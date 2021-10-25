import React from 'react';
import { render, screen } from '@testing-library/react';
import OrganisationSearch from '../OrganisationSearch';
import '@testing-library/jest-dom/extend-expect';

describe('Organisation component', () => {
	it("displays the organisation's name", () => {
		render(<OrganisationSearch />);

		expect(screen.getByText('Organisation Search')).toBeInTheDocument();
	});
});
