import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Shadow from './assets/shadow.png';
import Hero from './components/Hero/Hero';
import Loading from './components/Loading/Loading';
import "./style/App.css";
export default function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000);
		return () => clearTimeout(timer); // Cleanup the timer
	}, []);

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
			{loading ? <Loading /> : <Hero />}
		</>
	);
}
