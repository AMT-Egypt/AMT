import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

export default function App() {
    return (
        <>
            <Navbar />
            <section className="home_sec">
                <div className="title">
                    <h1>Transform Our Brand Presence With Powerful Visual Stories <span>Experience</span></h1>
                    <p>We empower brands by creating compelling visual identities that tell your unique story making your brand unforgettable.</p>
                    <div> <button className="contactBtn">Contact us</button> </div>
                </div>
                <div className="IconsParent">
                    <div><i className="fa-brands fa-github"></i></div> {/* GitHub */}
                    <div><i className="fa-brands fa-whatsapp"></i></div> {/* WhatsApp */}
                    <div><i className="fa-brands fa-facebook"></i></div> {/* Facebook */}
                </div>
            </section>
            <main className="talkAbout">
                <div>Your vision is expensive let us bring it to life and make it attainable</div>
                <div>we are all about taking your business to the next level we specialize in turning high-growth companies into leader of tomorrow by creating powerfull visual stories with us you move beyond today's possible setting new trends along the  way we are here to transform your brand and empower Your Team to grow fast and fearlessly into the future</div>
            </main>
        </>
    );
}
