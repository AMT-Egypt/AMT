import Carousel from "../Carousel";
import "./Reviews.css"
import { MyReviews } from "../../data/Reviews";

const Reviews = () => {
    const reviews = MyReviews;
    return (
        <div className="reviews">
            <div className="flex">
                <h1 className="titleRev">Reviews</h1>
                <p className="text">Our clients&apos; success stories powerfully underscore our deep commitment to surpassing expectations. Explore how our expertise brings about real, impactful results that not only elevate brands but also create enduring legacies.</p>
            </div>
            <Carousel>
                {
                    reviews.map((item,index)=>{
                        return (
                            <div key={index}>
                                <i className="fa-solid fa-quote-left large"></i>
                                <div>
                                    <p className="revtext">
                                        {item.text}
                                    </p>
                                    <p><strong>{item.name}</strong> , <span className="job">{item.job}</span></p>
                                </div>
                            </div>
                    )})
                }
            </Carousel>
        </div>
    );
}

export default Reviews;
