import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import Button from "../Button/Button";

export default function App() {
    return (
        <>
            <Navbar />
            <section className="home_sec">
                <div className="title">
                    <h1>Transform Our Brand Presence With Powerful Visual Stories <span>Experience</span></h1>
                    <p>We empower brands by creating compelling visual identities that tell your unique story making your brand unforgettable.</p>
                    <Button h={5} w={10} title={"Contact Us"} event={() => window.open("#")} />
                </div>
                <div className="IconsParent">
                    <div><i className="fa-brands fa-github"></i></div> {/* GitHub */}
                    <div><i className="fa-brands fa-whatsapp"></i></div> {/* WhatsApp */}
                    <div><i className="fa-brands fa-facebook"></i></div> {/* Facebook */}
                </div>
            </section>
        </>
    );
}
