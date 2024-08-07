import { FormEvent, useRef } from 'react';
import { toast } from 'react-toastify';
import handImage from '../../assets/hand-holding.png';
import msgValidator from '../../utils/validate';
import './style.css';
const ContactUs = () => {
	const fullNameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const phoneRef = useRef<HTMLInputElement>(null);
	const msgBoxRef = useRef<HTMLTextAreaElement>(null);

	let handleContact = (e: FormEvent) => {
		e.preventDefault();
		const check = msgValidator({
			fullName: fullNameRef.current?.value,
			email: emailRef.current?.value,
			phone: phoneRef.current?.value,
			message: msgBoxRef.current?.value,
		});

		if (check) {
			toast.success('Thank You.! We Will Contact You.');
			console.log('pass');
		} else {
			toast.error('Please Fill Valid Data');
		}
	};
	return (
		<section className='contact-us' id='contact'>
			<div className='wrapper'>
				<img src={handImage} alt='Hand Holding Telephone' />
			</div>
			<div className='form-area'>
				<h4>Our Franchise team will contact you shortly</h4>
				<p>Submit the short form below</p>
				<form>
					<input type='text' placeholder='Full Name' required ref={fullNameRef} />
					<div className='form-group'>
						<input type='email' placeholder='Email' required ref={emailRef} />
						<input type='phone' placeholder='Phone' required ref={phoneRef} />
					</div>
					<textarea placeholder='Message' required ref={msgBoxRef} />
					<button onClick={(e) => handleContact(e)}>Get in touch</button>
				</form>
			</div>
		</section>
	);
};

export default ContactUs;
