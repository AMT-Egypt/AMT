import Hero from './components/Hero/Hero';
import Shadow from './assets/shadow.png';
import Work from './components/OurWork/Work';
import Reviews from './components/Reviews/Reviews';
import Team from './components/Team/Team';
import Services from './components/Services/Services';
import StatesSection from './sections/stats_section/stats_section';
import ContactUs from './sections/contact_us/contact_us';
import Footer from './sections/footer/footer';
import { ToastContainer } from 'react-toastify';
export default function App() {
	return (
		<>
			<img className='shadow' src={Shadow} alt='Shadow' />
			<ToastContainer
				position={'top-right'}
				autoClose={2000}
				hideProgressBar={false}
				pauseOnHover={true}
				draggable={true}
				theme={'dark'}
			/>
			<Hero />
			<Work />
			<Services />
			<StatesSection />
			<Reviews />
			<Team />
			<ContactUs />
			<Footer />
		</>
	);
}
