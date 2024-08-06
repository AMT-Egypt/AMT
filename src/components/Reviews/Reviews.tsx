import Carousel from "../Carousel";
import "./Reviews.css"

const Reviews = () => {
    return (
        <div className="reviews">
            <div className="flex">
                <h1 className="titleRev">Reviews</h1>
                <p className="text">Our clients’ success stories powerfully underscore our deep commitment to surpassing expectations. Explore how our expertise brings about real, impactful results that not only elevate brands but also create enduring legacies.</p>
            </div>
            <Carousel>
                <div>
                    <i className="fa-solid fa-quote-left large"></i>
                    <div>
                        <p className="revtext">
                            Our clients’ success stories powerfully underscore our deep commitment to surpassing expectations. Explore how our expertise brings about real, impactful results that not only elevate brands but also create enduring legacies.
                        </p>
                        <p><strong>Ahmed Hafez</strong> , <span>UX / UI Designer</span></p>
                    </div>
                </div>
                <div>
                    <i className="fa-solid fa-quote-left large"></i>
                    <div>
                        <p className="revtext">
                            Our clients’ success stories powerfully underscore our deep commitment to surpassing expectations. Explore how our expertise brings about real, impactful results that not only elevate brands but also create enduring legacies.
                        </p>
                        <p><strong>Ahmed Hafez</strong>, <span>UX / UI Designer</span></p>
                    </div>
                </div>
                <div>
                    <i className="fa-solid fa-quote-left large"></i>
                    <div>
                        <p className="revtext">
                            Our clients’ success stories powerfully underscore our deep commitment to surpassing expectations. Explore how our expertise brings about real, impactful results that not only elevate brands but also create enduring legacies.
                        </p>
                        <p><strong>Ahmed Hafez</strong>, <span>UX / UI Designer</span></p>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}

export default Reviews;
