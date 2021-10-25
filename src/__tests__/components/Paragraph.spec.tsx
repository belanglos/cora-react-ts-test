import React from 'react';
import { render, screen } from '@testing-library/react';
import Paragraph from '../../components/Paragraph';

describe('Paragraph', () => {
	it('should not render children inside a p tag if there are none', () => {
		const { container } = render(<Paragraph></Paragraph>);
		const paragraphs = container.querySelectorAll('p');
		expect(paragraphs).toHaveLength(1);
		expect(paragraphs[0].textContent).toEqual('');
	});
	it('should render children inside a p tag', () => {
		const { container } = render(<Paragraph>Some children</Paragraph>);
		const paragraphs = container.querySelectorAll('p');
		expect(paragraphs).toHaveLength(1);
		expect(paragraphs[0].textContent).toEqual('Some children');
	});
});
