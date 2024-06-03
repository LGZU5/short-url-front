function Box({ setCopied, url, copied }) {
	return (
		<section className='flex justify-between w-2/5 border-2 rounded-lg border-primary-800 overflow-hidden'>
			<div className='bg-primary-400 bg-opacity-70 w-full flex items-center justify-center'>
				<p>
					URL acortada:{' '}
					<a
						href={`http://localhost:3000/${url}`}
						target='_blank'
						rel='noreferrer'
					>
						<strong>http://localhost:3000/{url}</strong>
					</a>
				</p>
			</div>

			<button
				className='py-2 px-3 bg-primary-500 hover:bg-primary-600 text-white '
				type='button'
				onClick={() => {
					navigator.clipboard
						.writeText(`http://localhost:3000/${url}`)
						.then(() => {
							setCopied(true);
						});
				}}
			>
				{copied ? '¡Copiado!' : 'Copiar'}
			</button>
		</section>
	);
}

export default Box;
