import StateCard from '../../components/state_card/state_card';
import blurSpot from '../../assets/blur-spot.png';
import './style.css';

const StatesSection = () => {
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
				<StateCard title='Working Peoples' count={30} />
				<StateCard title='World Office' count={1} />
				<StateCard title='Project Complete' count={70} />
				<StateCard title='Our Client' count={55} />
			</div>
		</section>
	);
};

export default StatesSection;
