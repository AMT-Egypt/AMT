
import Home from './components/Home/Home';
import Shadow from './components/assets/shadow.png';
import StatesSection from './sections/states_section/states_section';
import ContactUs from './sections/contact_us/contact_us';
import Footer from './sections/footer/footer';
export default function App() {
	return (
		<>
			<img className='shadow' src={Shadow} alt='Shadow' />s
			<Home />
			<StatesSection />
			<ContactUs />
			<Footer />
		</>
	);
}
