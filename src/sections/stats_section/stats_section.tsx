import StateCard from '../../components/state_card/state_card';
import blurSpot from '../../assets/blur-spot.png';
import './style.css';
import { useRef } from 'react';

const StatesSection = () => {
	const stateCardRef = useRef<HTMLDivElement | null>(null);
	return (
		<section className='stats-section'>
			<div className='image-c'>
				<img src={blurSpot} alt='Red Circle Spot' />
			</div>
			<p>
				Explore the heart of our studio—where numbers tell the story of our dedication, creativity,
				and commitment to excellence. These statistics not only reflect our design prowess but also
				showcase the tangible impact we make in the real world.
			</p>
			<hr />
			<div className='stats-list'>
				<StateCard title='Working Peoples' end={30} prefix='+' />
				<StateCard title='World Office' end={1} />
				<StateCard title='Project Complete' end={70} prefix='+' />
				<StateCard title='Our Client' end={55} />
			</div>
		</section>
	);
};

export default StatesSection;
