function Button({ type, children, ...props }) {
	return (
		<button
			aria-label={props['aria-label']}
			type={type}
			className={props.className}
		>
			{children}
		</button>
	);
}

export default Button;
