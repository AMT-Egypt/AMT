import React from "react";
import Home from "./components/Home/Home";
import Shadow from "./components/assets/shadow.png"
export default function App() {
  return (
    <>
    <img className='shadow' src={Shadow} alt="Shadow" />
      <Home />
    </>
  );
}
