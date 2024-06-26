// ParticlesBackground.jsx
import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { loadParticlesConfig } from '../config/particles.config';

const ParticlesBackground = ({ children }) => {
	const [init, setInit] = useState(false);

	useEffect(() => {
		initParticlesEngine(async engine => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	return init ? (
		<>
			<Particles id='tsparticles' options={loadParticlesConfig} />
			{children}
		</>
	) : null;
};

export default ParticlesBackground;
