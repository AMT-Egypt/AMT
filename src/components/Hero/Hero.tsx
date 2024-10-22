import Shadow from "../../assets/shadow.png";
import ContactUs from "../../sections/contact_us/contact_us";
import Footer from "../../sections/footer/footer";
import StatesSection from "../../sections/stats_section/stats_section";
import "../../style/Hero.css";
import NavBar from "../NavBar/NavBar";
import Work from "../OurWork/Work";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";
import Team from "../Team/Team";

export default function Hero() {
  let handleContact = () => {
    window.open("https://wa.me/+201019472864");
  };
  let goToGithub = () => {
    window.open("https://github.com/AMT-Egypt");
  };
  let goToFacebook = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=61559455807819&mibextid=ZbWKwL"
    );
  };
  let goToInstagram = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=61559455807819&mibextid=ZbWKwL"
    );
  };

  return (
    <>
      <img
        style={{ userSelect: "none", zIndex: "0" }}
        className="shadow"
        src={Shadow}
        alt="Shadow"
      />
      <NavBar />
      <section className="home_sec">
        <div className="title">
          <h1 className="h1">
            Transform Our Brand Presence With Powerful Visual Stories{" "}
            <span>Experience</span>
          </h1>
          <p>
            We empower brands by creating compelling visual identities that tell
            your unique story making your brand unforgettable.
          </p>
          <div>
            {" "}
            <button onClick={handleContact} className="contactBtn">
              Contact us
            </button>{" "}
          </div>
        </div>
        <div className="IconsParent">
          <div onClick={goToFacebook}>
            <i className="fa-brands fa-facebook"></i>
          </div>{" "}
          <div onClick={goToInstagram}>
            <i className="fa-brands fa-instagram"></i>
          </div>{" "}
          <div onClick={goToGithub}>
            <i className="fa-brands fa-github"></i>
          </div>{" "}
          <div onClick={handleContact}>
            <i className="fa-brands fa-whatsapp"></i>
          </div>{" "}
        </div>
      </section>
      <main className="talkAbout">
        <div>
          Your vision is expensive let us bring it to life and make it
          attainable
        </div>
        <div>
          we are all about taking your business to the next level we specialize
          in turning high-growth companies into leader of tomorrow by creating
          powerfull visual stories with us you move beyond today's possible
          setting new trends along the way we are here to transform your brand
          and empower Your Team to grow fast and fearlessly into the future
        </div>
      </main>
      <Work />
      <Services />
      <StatesSection />
      <Reviews />
      <Team />
      <ContactUs />
      <Footer />
    </>
  );
}
