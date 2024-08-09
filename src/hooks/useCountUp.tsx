import { useEffect, useState } from 'react';

const useCountUp = (end: number, duration: number) => {
	const [count, setCount] = useState<number>(0);

	useEffect(() => {
		let start: number = 0;
		let step = end / (duration / 100);
		const timer = setInterval(() => {
			start += step;
			if (start >= end) {
				clearInterval(timer);
				setCount(end);
			} else {
				setCount(Math.ceil(start));
			}
		}, 50);

		return () => clearInterval(timer);
	}, [end, duration]);
	return count;
};

export default useCountUp;
