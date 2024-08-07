import React from 'react'
import "../../style/ServicesLoader.css"
export default function ServicesLoader() {
    return (
        <section className="loadingSec">
            <img style={{
                height: "10rem"

            }} src={Logo} alt="Logo" />
            <div className="container">
                <div className="loader" />
                <div className="loader" />
                <div className="loader" />
            </div>
            <CounterUp start={0} end={100} time={14} size={2} weight={"bold"} />
        </section>

    )
}
