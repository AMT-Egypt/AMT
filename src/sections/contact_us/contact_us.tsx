import handImage from "../../assets/hand-holding.png";
import "./style.css";
const ContactUs = () => {
  let handleContact = () => {
    window.open("https://wa.me/+201019472864");
  };
  return (
    <section className="contact-us">
      <div className="wraper">
        <img src={handImage} alt="Hand Holding Telephone" />
      </div>
      <div className="text">
        <h4>
          Time to Create A Powerfull
          <span>Visual Transformation</span>
          of your Brand
        </h4>
        <p>
          Book a Free Strategy Session to discover your brand's full potential
        </p>
        <button onClick={handleContact}>Contact Us Now</button>
      </div>
    </section>
  );
};

export default ContactUs;
