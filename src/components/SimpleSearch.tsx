import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

type Props = {
	placeholder: string;
	ariaLabel: string;
	handleClick: Function;
};

export default function SimpleSearch(props: Props) {
	const { placeholder, ariaLabel, handleClick } = props;
	return (
		<Paper
			component="form"
			sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
		>
			<InputBase
				sx={{ ml: 1, flex: 1 }}
				placeholder={placeholder}
				inputProps={{ 'aria-label': ariaLabel }}
			/>
			<IconButton
				type="submit"
				sx={{ p: '10px' }}
				aria-label="search"
				onClick={(e: any) => {
					e.preventDefault();
					console.log('clicked');
				}}
			>
				<SearchIcon />
			</IconButton>
		</Paper>
	);
}
