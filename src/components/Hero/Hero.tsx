import NavBar from "../NavBar/NavBar";
import Shadow from "../../assets/shadow.png";
import "../../style/Hero.css";

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

  return (
    <>
      <img
        style={{ userSelect: "none",zIndex:"0" }}
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
          <div onClick={goToGithub}>
            <i className="fa-brands fa-github"></i>
          </div>{" "}
          {/* GitHub */}
          <div onClick={handleContact}>
            <i className="fa-brands fa-whatsapp"></i>
          </div>{" "}
          {/* WhatsApp */}
          <div onClick={goToFacebook}>
            <i className="fa-brands fa-facebook"></i>
          </div>{" "}
          {/* Facebook */}
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
    </>
  );
}
