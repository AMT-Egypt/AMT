import Logo from "../../assets/Logo.svg"
import "../../style/Loading.css"
import { CounterUp } from "../AMT_Package"
export default function Loading() {
    return (
        <section className="loadingSec">
            <img style={{ height: "10rem" }} src={Logo} alt="Logo" />
            <div className="loader"></div>
            <CounterUp start={0} end={100} time={14} size={2} weight={"bold"} />
        </section>
    )
}