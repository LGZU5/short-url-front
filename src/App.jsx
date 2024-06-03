// App.jsx
import Input from './components/input';
import ParticlesBackground from './components/particles';

function App() {
	return (
		<ParticlesBackground>
			<main className=' relative z-10 w-screen h-screen flex flex-col gap-3 items-center justify-center  text-white'>
				<h1 className='text-[5vw] font-bold font-montserrat'>
					Acortador De Url
				</h1>
				<Input />
			</main>
		</ParticlesBackground>
	);
}

export default App;
