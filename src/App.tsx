import { ToastContainer } from 'react-toastify';
import Shadow from './assets/shadow.png';
import Hero from './components/Hero/Hero';
import Work from './components/OurWork/Work';
import Reviews from './components/Reviews/Reviews';
import Services from './components/Services/Services';
import Team from './components/Team/Team';
import ContactUs from './sections/contact_us/contact_us';
import Footer from './sections/footer/footer';
import StatesSection from './sections/stats_section/stats_section';
import "./style/App.css";

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
