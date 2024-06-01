import Button from './button';

function Box({ setCopied, url, copied }) {
	return (
		<section className='flex justify-between w-2/5 border-2 rounded-lg border-primary-800'>
			<div className='bg-primary-700 bg-opacity-70 w-full flex items-center justify-center rounded-s-lg'>
				<p>
					Shortened URL :{' '}
					<a
						href={`http://localhost:3000/${url}`}
						target='_blank'
						rel='noreferrer'
					>
						<strong>http://localhost:3000/{url}</strong>
					</a>
				</p>
			</div>

			<Button
				type='button'
				onClick={() => {
					navigator.clipboard
						.writeText(`http://localhost:3000/${url}`)
						.then(() => {
							setCopied(true);
						});
				}}
			>
				{copied ? 'Copied!' : 'Copy'}
			</Button>
		</section>
	);
}

export default Box;
