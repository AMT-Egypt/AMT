import useScrollTrigger from '../../hooks/useScrollTrigger';
import { memo, useCallback, useEffect, useState } from 'react';

const StateCard = ({ title, count }: { title: string; count: number }) => {
	const [curCount, setCurCount] = useState(0);
	const [shouldStart] = useScrollTrigger(50); // Trigger at 50% scroll
	
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
		}
	}, [shouldStart, count]);

	useEffect(() => {
		if (shouldStart) {
			handleAnimation();
		}
	}, [shouldStart, handleAnimation]);

	return (
		<div className='state-card'>
			<p>{title}</p>
			<p>{curCount}</p>
		</div>
	);
};

export default memo(StateCard);
