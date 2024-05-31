import React from 'react';
import Button from '../button/button';
import useInput from '../../hooks/useInput';

function Input() {
	const { handleSubmit } = useInput();

	return (
		<form
			onSubmit={handleSubmit}
			className='flex items-center justify-center w-2/5'
		>
			<input
				name='urlInput'
				id='urlInput'
				type='text'
				placeholder='Enter your URL'
				className='bg-primary-200 rounded-s-lg w-full p-3 border-primary-400 border-3 text-black focus:outline-none '
			/>
			<Button type='submit'>Shorten</Button>
		</form>
	);
}

export default Input;
