export const loadParticlesConfig = {
	background: {
		color: {
			value: '#151019',
		},
	},
	fpsLimit: 120,
	interactivity: {
		events: {
			onClick: {
				enable: false,
			},
			onHover: {
				enable: false,
			},
		},
	},
	particles: {
		color: {
			value: '#88C8FF',
		},
		links: {
			color: '#88C8FF',
			distance: 250,
			enable: true,
			opacity: 0.8,
			width: 0.5,
		},
		move: {
			direction: 'none',
			enable: true,
			outModes: {
				default: 'bounce',
			},
			random: false,
			speed: 3,
			straight: false,
		},
		number: {
			density: {
				enable: true,
				area: 800,
			},
			value: 80,
		},
		opacity: {
			value: 0.9,
		},
		shape: {
			type: 'none',
		},
		size: {
			value: { min: 1, max: 3 },
		},
	},
	detectRetina: true,
};
