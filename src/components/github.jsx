import React, { useState, useCallback } from 'react';
import GithubSvg from '../assets/githubSvg';
import Button from './button';

function Github() {
	const [hover, setHover] = useState(false);

	const handleMouseEnter = useCallback(() => setHover(true), []);
	const handleMouseLeave = useCallback(() => setHover(false), []);

	return (
		<a
			href='https://github.com/LGZU5/short-url-front'
			target='_blank'
			rel='noreferrer'
			className='fixed bottom-2 right-2'
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			title='ver repositorio en GitHub'
		>
			<Button
				aria-label='ver repositorio en GitHub'
				className={`border-2 ${hover ? 'border-transparent bg-primary-500' : 'border-primary-500 '} hover:scale-105 rounded-lg p-1 transition-all duration-200 ease-in-out`}
			>
				<GithubSvg fill={hover ? '#101720' : '#6e55fd'} />
			</Button>
		</a>
	);
}

export default Github;
