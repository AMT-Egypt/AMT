import "./Team.css"
import Carousel from "../Carousel";
import { ourTeam } from "../../data/Team";

const Team = () => {
    const team = ourTeam;
    return (
        <div className="team">
            <div className="flexTeam">
                <h1 className="titleTeam">Team</h1>
                <p className="textTeam">At AMT, our team is more than our foundation—it&apos;s our driving force. Every team member is a powerhouse of creativity, armed with specialized expertise and relentless dedication that shapes our industry-leading designs.</p>
            </div>
            <Carousel>
                {
                    team.map((item,index)=>{
                        return (
                            <div key={index}>
                                <img src={item.image} alt="team" className="image"/>
                                <div className="flexCenter">
                                    <h2>{item.name}</h2>
                                    <p>{item.job}</p>
                                    <div className="link">
                                        <a href={item.behance_url}><i className="fa-brands fa-behance"></i></a>
                                        <a href={item.linkedIn_url}><i className="fa-brands fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    );
}

export default Team;
