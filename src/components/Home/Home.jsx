import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css"
import Button from "../Button/Button";
export default function App() {
    return (
        <>
            <Navbar />
            <section className="home_sec">
                <div className="title">
                    <h1>transform our Brand Presence With Powerful Visual Stories <span>Experience</span></h1>
                    <p>we Empower brands by creating compelling visual identities that tell your unique story making your brand unforgettable</p>
                    <Button h={10} w={10} title={"contact US"} event={
                        window.open("#") // Social Media Link
                    } />
                </div>
                <div className="IconsParent">
                    <div><i class="fa-brands fa-github"></i></div>  {/*Github*/}
                    <div><i class="fa-brands fa-whatsapp"></i></div> {/*WhatsApp*/}
                    <div><i class="fa-brands fa-facebook"></i></div> {/*Facebook*/}
                </div>
            </section>
        </>
    );
}
