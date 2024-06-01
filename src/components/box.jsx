import Button from './button';

function Box({ setCopied, url, copied }) {
	return (
		<>
			<div className='flex justify-between w-2/5 rounded-lg'>
				<div className='bg-primary-700 w-full items-center justify-center rounded-lg'>
					<p>
						Shortened URL :{' '}
						<a
							href={`https://shorturl.com/${url}`}
							target='_blank'
							rel='noreferrer'
						>
							https://shorturl.com/{url}
						</a>
					</p>
				</div>

				<Button
					type='button'
					onClick={() => {
						navigator.clipboard
							.writeText(`https://shorturl.com/${url}`)
							.then(() => {
								setCopied(true);
							});
					}}
				>
					{copied ? 'Copied!' : 'Copy'}
				</Button>
			</div>
		</>
	);
}

export default Box;
