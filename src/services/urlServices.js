const sendUrl = async url => {
	try {
		const response = await fetch('http://localhost:3000/short-url', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ url }),
		});
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Fetch error:', error);
	}
};

export default sendUrl;
