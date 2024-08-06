import React from "react";
import Hero from "./components/Hero/Hero";
import Shadow from "./components/assets/shadow.png"
import Work from "./components/OurWork/Work";
import Reviews from "./components/Reviews/Reviews";
import Team from "./components/Team/Team";
export default function App() {
  return (
    <>
      <img className='shadow' src={Shadow} alt="Shadow" />
      <Hero />
      <Work/>
      <Reviews/>
      <Team/>
    </>
  );
}
