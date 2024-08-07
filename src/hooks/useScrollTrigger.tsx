import { useEffect, useState } from 'react';

const useScrollTrigger = () => {
	// const [startCount, setStartCount] = useState<number>(0);
	const [shouldStart, setShouldStart] = useState<boolean>(false);
	const setAnimation = () => (window.scrollY >= 800 ? setShouldStart(true) : setShouldStart(false));

	useEffect(() => {
		window.addEventListener('scroll', setAnimation);

		return () => window.removeEventListener('scroll', setAnimation);
	}, []);

	return [shouldStart, setShouldStart];
};

export default useScrollTrigger;
