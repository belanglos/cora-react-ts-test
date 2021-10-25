import React from 'react';

type Props = {
	text: string;
};

const ListItem = (props: Props) => {
	return <li>{props.text}</li>;
};

export default ListItem;
