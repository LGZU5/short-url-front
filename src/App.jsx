import Input from './components/input';

function App() {
	return (
		<main className='bg-[url(/background.webp)] bg-no-repeat bg-cover w-screen h-screen flex flex-col gap-3 items-center justify-center bg-black text-white'>
			<h1 className='text-xl'>Shortener Url</h1>
			<Input />
		</main>
	);
}

export default App;
