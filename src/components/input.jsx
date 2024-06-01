import React from 'react';
import Button from './button';
import useInput from '../hooks/useInput';
import Box from './box';

function Input() {
	const { handleSubmit, copied, setCopied, url, showBox } = useInput();

	return (
		<>
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
			{showBox && <Box setCopied={setCopied} url={url} copied={copied} />}
		</>
	);
}

export default Input;
