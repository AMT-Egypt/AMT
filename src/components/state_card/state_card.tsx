import CountUp from 'react-countup';
import useScrollTrigger from '../../hooks/useScrollTrigger';

const StateCard = ({ title, count }: { title: string; count: number }) => {
	const [startCount] = useScrollTrigger();

	return (
		<div className='state-card'>
			<p>{title}</p>

			<p>{startCount && <CountUp start={0} end={count} delay={0} />}</p>
		</div>
	);
};

export default StateCard;
