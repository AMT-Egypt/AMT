import Carousel from "../Carousel";
import "./Work.css";
// import image from "../../assets/work.jpeg"
import image1 from "../../assets/Library.png"
import image2 from "../../assets/Ecommerce.png"
import image3 from "../../assets/Macros.png"
import WorkCard from "./WorkCard";

const Work = () => {
    return (
        <div className="work" id="work">
            <h1 className="titleH1">Our Work</h1>
            <Carousel>
                <WorkCard image={image1} title="Library Store" url="https://library-omega-nine.vercel.app/" />
                <WorkCard image={image3} title="AK Macros" url="https://ak-macros.vercel.app/" />
                <WorkCard image={image2} title="E-commerce" url="https://next-js-e-commerce-two-blush.vercel.app/" />
            </Carousel>
        </div>
    );
}

export default Work;
