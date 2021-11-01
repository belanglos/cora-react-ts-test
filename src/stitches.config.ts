import { createStitches } from '@stitches/react';

export const { styled } = createStitches({
	theme: {
		colors: {
			accentColour: 'blue',
		},
		fontSizes: {
			100: '2.25rem',
		},
	},
});

export default { styled };
