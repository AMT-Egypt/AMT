import logo from '../../components/assets/logo.png';
import './style.css';

const Footer = () => {
	return (
		<footer>
			<div className='container'>
				<div className='social'>
					<div className='brand'>
						<img src={logo} alt='AMT EGY LOGO' />
						<h5>Let’s a talk</h5>
					</div>
					<ul className='links'>
						<li>
							<a href='/' className='active'>
								Facebook
							</a>
						</li>
						<li>
							<a href='/' className='active'>
								Instagram
							</a>
						</li>
						<li>
							<a href='/' className='active'>
								Behance
							</a>
						</li>
						<li>
							<a href='/' className='active'>
								Github
							</a>
						</li>
						<li>
							<a href='/' className='active'>
								What'sapp
							</a>
						</li>
					</ul>
				</div>
				<hr />
				<ul className='site-links'>
					<li className='active'>
						<a href='/' className='active'>
							Home
						</a>
					</li>
					<li>
						<a href='/'>Work</a>
					</li>
					<li>
						<a href='/'>Services</a>
					</li>
					<li>
						<a href='/'>Contact</a>
					</li>
				</ul>
				<hr />
				<div className='info'>
					<div className='c-info'>
						<p>+20 1121234656</p>
						<p>amtteam@gmail.com</p>
					</div>
					<div className='privacy'>
						<a href='/'>Privacy Policy</a>
						<a href='/'>Terms & Conditions</a>
					</div>
				</div>
			</div>
			<div className='copyrights'>
				<p>Copyright © 2024 All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
