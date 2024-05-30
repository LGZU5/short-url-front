import React from 'react';
import Button from '../button/button';
import useInput from '../../hooks/useInput';

function Input() {
	const { handleSubmit } = useInput();
	return (
		<form onSubmit={handleSubmit}>
			<input type='text' placeholder='Enter your URL' />
			<Button type='submit'>Shorten</Button>
		</form>
	);
}

export default Input;
