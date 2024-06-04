import Github from './github';
import Input from './input';

function Main() {
	return (
		<main className=' relative z-10 w-screen h-screen flex flex-col gap-3 items-center justify-center  text-white'>
			<h1 className='md:text-[5vw] text-[8vw] font-bold font-montserrat'>
				Acortador De Url
			</h1>
			<Input />
			<Github />
		</main>
	);
}

export default Main;
