function Button({ type, children, onClick }) {
	return (
		<button
			type={type}
			onClick={onClick}
			className='transition-all duration-200 ease-in-out bg-primary-500 p-3 rounded-e-lg hover:bg-primary-600 active:bg-primary-700'
		>
			{children}
		</button>
	);
}

export default Button;
