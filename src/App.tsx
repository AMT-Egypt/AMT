import Hero from './components/Hero/Hero';
import Shadow from './components/assets/shadow.png';
export default function App() {
	return (
		<>
			<img className='shadow' src={Shadow} alt='Shadow' />
			<Hero />
		</>
	);
}
