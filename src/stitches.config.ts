import { createStitches } from '@stitches/react';

export const { styled } = createStitches({
	theme: {
		colors: {
			accentColour: 'green',
		},
		fontSizes: {
			100: '2.25rem',
		},
	},
});

export default { styled };
