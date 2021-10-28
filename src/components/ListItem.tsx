import React from 'react';

type Props = {
	text: string;
};

const ListItem = ({ text }: Props) => {
	return <li>{text}</li>;
};

export default ListItem;
