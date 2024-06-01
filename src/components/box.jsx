function Box({ setCopied, url, copied }) {
	return (
		<>
			<div className='flex justify-between w-2/5 rounded-lg'>
				<div className='bg-primary-700 w-full items-center justify-center rounded-lg'>
					<p>
						Shortened URL :{' '}
						<a href={`https://shorturl.com/${url}`}>
							https://shorturl.com/{url}
						</a>
					</p>
				</div>
				<button
					className='bg-primary-400 rounded-lg p-2'
					onClick={() => {
						navigator.clipboard
							.writeText(`https://shorturl.com/${url}`)
							.then(() => {
								setCopied(true);
							});
					}}
				>
					{copied ? 'Copied!' : 'Copy'}
				</button>
			</div>
		</>
	);
}

export default Box;
