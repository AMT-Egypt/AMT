import useScrollTrigger from '../../hooks/useScrollTrigger';
import { memo, useCallback, useEffect, useState } from 'react';

const StateCard = ({ title, count }: { title: string; count: number }) => {
	const [curCount, setCurCount] = useState(0);
	const [shouldStart] = useScrollTrigger();
	
	
	const handleAnimation = useCallback(() => {
		let start = 0;
		const end = count;

		if (shouldStart && count !== start) {
			let timer = setInterval(() => {
				start += 1;
				setCurCount(start);
				if (start === end) {
					clearInterval(timer);
					return;
				}
			}, 10);
		} else {
			return;
		}
	}, [shouldStart, count]);

	useEffect(() => {
		window.addEventListener('scroll', handleAnimation);

		return () => window.removeEventListener('scroll', handleAnimation);
	}, [handleAnimation]);
	return (
		<div className='state-card'>
			<p>{title}</p>

			<p>{curCount}</p>
		</div>
	);
};

export default memo(StateCard);
