import Carousel from "../Carousel";
import "./Work.css";
// import image from "../../assets/work.jpeg"
import image1 from "../../assets/Library.png"
import image2 from "../../assets/Ecommerce.png"
import image3 from "../../assets/Macros.png"
import image4 from "../../assets/magia.png"
import image5 from "../../assets/almotawakel.png"
import image6 from "../../assets/waSender.png"
import image7 from "../../assets/games.png"
import image8 from "../../assets/elmaram.png"
import WorkCard from "./WorkCard";

const Work = () => {
    return (
        <div className="work" id="work">
            <h1 className="titleH1">Our Work</h1>
            <Carousel>
                <WorkCard image={image4} title="Magia Blog-Plus" url="https://hamdymohamedak.github.io/magia-blog/" />
                <WorkCard image={image1} title="Library Store" url="https://library-omega-nine.vercel.app/" />
                <WorkCard image={image3} title="AK Macros" url="https://ak-macros.vercel.app/" />
                <WorkCard image={image5} title="Al Motawakel" url="https://hamdymohamedak.github.io/Almotawakel/" />
                <WorkCard image={image2} title="E-commerce" url="https://next-js-e-commerce-two-blush.vercel.app/" />
                <WorkCard image={image6} title="WASender" url="https://hamdymohamedak.github.io/WasSender/" />
                <WorkCard image={image7} title="AK Games" url="https://akgames.vercel.app/" />
                <WorkCard image={image8} title="AlMaram Pharmacies" url="https://elmaram.vercel.app/" />
            </Carousel>
        </div>
    );
}

export default Work;
