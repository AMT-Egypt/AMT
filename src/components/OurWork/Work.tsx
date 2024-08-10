import Carousel from "../Carousel";
import "./Work.css";
import WorkCard from "./WorkCard";
import { work } from "../../data/WorkData";

const Work = () => {
    const ourWork = work;
    return (
        <div className="work" id="work">
            <h1 className="titleH1">Our Work</h1>
            <Carousel>
                {
                    ourWork.map((item, index) => (
                        <WorkCard key={index} image={item.image} title={item.title} url={item.url} />
                    ))
                }
            </Carousel>
        </div>
    );
}

export default Work;
