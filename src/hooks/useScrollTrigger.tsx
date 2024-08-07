import { useState, useEffect } from 'react';

const useScrollTrigger = (percentage = 50) => {
	const [trigger, setTrigger] = useState(false);

	const handleScroll = () => {
		const scrollTop = window.scrollY;
		const docHeight = document.documentElement.scrollHeight;
		const winHeight = window.innerHeight;
		const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;

		if (scrollPercent >= percentage) {
			setTrigger(true);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return [trigger];
};

export default useScrollTrigger;
