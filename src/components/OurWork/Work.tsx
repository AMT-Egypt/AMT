import Carousel from "../Carousel";
import "./Work.css"

const Work = () => {
    return (
        <div className="work">
            <h1 className="titleH1">Our Work</h1>
            <Carousel>
                <div className="back">
                    <div className="absult">
                        <h1>Coffee Shop</h1>
                        <p>We’re all about taking your business to the next level. </p>
                    </div>
                </div>
                <div className="back">
                    <div className="absult">
                        <h1>Coffee Shop</h1>
                        <p>We’re all about taking your business to the next level. </p>
                    </div>
                </div>
                <div className="back">
                    <div className="absult">
                        <h1>Coffee Shop</h1>
                        <p>We’re all about taking your business to the next level. </p>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}

export default Work;
