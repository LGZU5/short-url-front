function Box({ setCopied, url, copied }) {
	return (
		<section className='flex justify-between md:w-2/5 w-4/5 border-2 rounded-lg border-primary-800 overflow-hidden'>
			<div className='bg-primary-400 bg-opacity-70 w-full flex items-center justify-center p-2 md:p-0'>
				<p className='text-center'>
					URL acortada:{' '}
					<a
						href={`https://short-url-back.vercel.app/${url}`}
						target='_blank'
						rel='noreferrer'
						className='font-bold'
					>
						https://short-url-back.vercel.app/{url}
					</a>
				</p>
			</div>

			<button
				aria-label='copiar URL acortada'
				className='py-2 px-3 bg-primary-700 hover:bg-primary-800 text-white transition-all duration-300 ease-in-out'
				type='button'
				onClick={() => {
					navigator.clipboard
						.writeText(`https://short-url-back.vercel.app/${url}`)
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
