import { useEffect, useState } from 'react';

const useScrollTrigger = () => {
	const [startCount, setStartCount] = useState<boolean>(false);
    
	const ScrollTrigger = () => (window.scrollY >= 800 ? setStartCount(true) : setStartCount(false));

	useEffect(() => {
		window.addEventListener('scroll', ScrollTrigger);

		return () => window.removeEventListener('scroll', ScrollTrigger);
	}, []);

	return [startCount];
};

export default useScrollTrigger;
