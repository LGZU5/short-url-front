function Button({ type, children, ...props }) {
	return (
		<button type={type} className={props.className}>
			{children}
		</button>
	);
}

export default Button;
