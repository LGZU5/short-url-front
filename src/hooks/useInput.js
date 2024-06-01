import validator from 'validator';
import sendUrl from '../services/urlServices';
import { useState } from 'react';

const useInput = () => {
	const [copied, setCopied] = useState(false);
	const [url, setUrl] = useState('');
	const [showBox, setShowBox] = useState(false);

	const handleSubmit = async event => {
		event.preventDefault();

		const urlInput = event.target.elements.urlInput.value;
		const validUrl = validator.isURL(urlInput);

		if (validUrl) {
			try {
				const data = await sendUrl(urlInput);
				setUrl(data.url.urlShort);
				setShowBox(true);
			} catch (error) {
				console.error('Fetch error:', error);
			}
		} else {
			console.log('Invalid URL');
		}
	};

	return { handleSubmit, copied, setCopied, url, showBox };
};

export default useInput;
