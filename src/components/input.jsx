import React from 'react';
import Button from './button';
import useInput from '../hooks/useInput';
import Box from './box';
import Send from '../assets/send';

function Input() {
	const { handleSubmit, copied, setCopied, url, showBox, error } = useInput();

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className='flex items-center justify-center md:w-2/5 w-4/5 rounded-lg overflow-hidden'
			>
				<input
					name='urlInput'
					id='urlInput'
					type='text'
					placeholder='Escribe tu URL aqui. Ejemplo: https://www.google.com'
					className='bg-primary-200  w-full p-3 border-primary-400 border-3 text-black focus:outline-none '
				/>
				<Button
					aria-label='enviar URL'
					className='transition-all duration-200 ease-in-out bg-primary-500 p-3 hover:bg-primary-600 active:bg-primary-700'
					type='submit'
				>
					<Send />
				</Button>
			</form>
			{error && (
				<p className='text-red-500 text-sm'>
					La URL no es valida, por favor intenta de nuevo.
				</p>
			)}
			<div
				className={`transition-all duration-500 ease-in-out flex items-center justify-center ${showBox ? 'opacity-100' : 'opacity-0'} w-full`}
			>
				<Box setCopied={setCopied} url={url} copied={copied} />
			</div>
		</>
	);
}

export default Input;
