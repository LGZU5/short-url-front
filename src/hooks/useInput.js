import validator from 'validator';

const useInput = () => {
	const handleSubmit = async event => {
		console.log('handleSubmit called');
		event.preventDefault();

		const urlInput = event.target.elements.urlInput.value;
		console.log('urlInput:', urlInput);
		const validUrl = validator.isURL(urlInput);
		console.log('validUrl:', validUrl);

		if (validUrl) {
			try {
				console.log('Attempting to fetch');
				const response = await fetch('http://localhost:3000/short-url', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ url: urlInput }),
				});
				console.log('Fetch response:', response);
				const data = await response.json();
				console.log('Response data:', data);
			} catch (error) {
				console.error('Fetch error:', error);
			}
		} else {
			console.log('Invalid URL');
		}
	};

	return { handleSubmit };
};

export default useInput;
