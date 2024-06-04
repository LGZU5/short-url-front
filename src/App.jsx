import { Suspense, lazy } from 'react';
const Main = lazy(() => import('./components/main'));
const ParticlesBackground = lazy(() => import('./components/particles'));

function App() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<ParticlesBackground>
				<Main />
			</ParticlesBackground>
		</Suspense>
	);
}

export default App;
