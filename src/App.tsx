import Hero from './components/Hero/Hero';
import Shadow from './assets/shadow.png';
import Work from './components/OurWork/Work';
import Reviews from './components/Reviews/Reviews';
import Team from './components/Team/Team';
import Services from './components/Services/Services';
export default function App() {
	return (
		<>
			<img className='shadow' src={Shadow} alt='Shadow' />
			<Hero />
			<Work />
			<Services />
			<Reviews />
			<Team />
		</>
	);
}
