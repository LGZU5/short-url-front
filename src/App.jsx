import { Suspense, lazy } from 'react';
import LoadingPage from './components/loadingPage';
const Main = lazy(() => import('./components/main'));
const ParticlesBackground = lazy(() => import('./components/particles'));

function App() {
	return (
		<Suspense fallback={<LoadingPage />}>
			<ParticlesBackground>
				<Main />
			</ParticlesBackground>
		</Suspense>
	);
}

export default App;
