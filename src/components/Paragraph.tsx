import React from 'react';

type Props = {
	children?: React.ReactNode;
};

const Paragraph = (props: Props) => {
	return <p>{props.children}</p>;
};

export default Paragraph;
