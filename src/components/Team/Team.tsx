import "./Team.css"
import image from "../assets/team.jpg"
import Carousel from "../Carousel";

const Team = () => {
    return (
        <div className="team">
            <div className="flexTeam">
                <h1 className="titleTeam">Team</h1>
                <p className="textTeam">At AMT, our team is more than our foundation—it’s our driving force. Every team member is a powerhouse of creativity, armed with specialized expertise and relentless dedication that shapes our industry-leading designs.</p>
            </div>
            <Carousel>
                <div>
                    <img src={image} alt="team" className="image"/>
                    <div className="flexCenter">
                        <h2>Ahmed Hafez</h2>
                        <p>UX / UI Designer</p>
                        <div className="link">
                            <a href="#/"><i className="fa-brands fa-behance"></i></a>
                            <a href="#/"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={image} alt="team" className="image"/>
                    <div className="flexCenter">
                        <h2>Ahmed Hafez</h2>
                        <p>UX / UI Designer</p>
                        <div className="link">
                            <a href="#/"><i className="fa-brands fa-behance"></i></a>
                            <a href="#/"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={image} alt="team" className="image"/>
                    <div className="flexCenter">
                        <h2>Ahmed Hafez</h2>
                        <p>UX / UI Designer</p>
                        <div className="link">
                            <a href="#/"><i className="fa-brands fa-behance"></i></a>
                            <a href="#/"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}

export default Team;
