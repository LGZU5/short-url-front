import React from 'react';

function useInput() {
	const handleSubmit = event => {
		event.preventDefault();
		console.log('Submitted');
	};

	return { handleSubmit };
}

export default useInput;
