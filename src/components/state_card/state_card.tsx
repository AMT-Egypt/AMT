import { memo, useEffect, useRef, useState } from 'react';
import useCountUp from '../../hooks/useCountUp';

const StateCard = ({ title, end, prefix }: { title: string; end: number; prefix?: string }) => {
	const cardRef = useRef<HTMLDivElement | null>(null);
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const count = useCountUp(isVisible ? end : 0, 2000);

	const checkVisibility = () => {
		if (cardRef.current) {
			const rect = cardRef.current.getBoundingClientRect();
			if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', checkVisibility);
		checkVisibility();

		return () => {
			window.removeEventListener('scroll', checkVisibility);
		};
	}, []);

	return (
		<div className='state-card' ref={cardRef}>
			<p>{title}</p>
			<p>
				{count}
				{prefix && prefix}
			</p>
		</div>
	);
};

export default memo(StateCard);
