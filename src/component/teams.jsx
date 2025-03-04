import { Link } from "react-router-dom";
import { teamdata } from "../constant/alldata";
import { useState } from "react";

function Teams() {
    const [hover, setHover] = useState(1);
    return (
        <>
            {teamdata.map((data, i) => (
                <div className="col-xl-3 col-sm-6 m-b30 wow fadeInUp" data-wow-delay={data.dealy} data-wow-duration="0.8s" key={i}>
                    <div className={`dz-team style-2 box-hover ${hover === data.id ? "active" : ""}`} onMouseEnter={() => setHover(data.id)}>
                        <div className="dz-content">
                            <h3 className="dz-name">
                                <Link to="/team-detail">{data.title}</Link>
                            </h3>
                            <span className="dz-position">Cardiac Surgery</span>
                        </div>
                        <div className="dz-media">
                            <img src={data.image} alt="/" />
                            <Link to="/appointment" className="btn btn-primary"> <i className="feather icon-calendar m-r5" /> Appointment Now </Link>
                            <ul className="dz-social">
                                <li> <Link className="linkedin" to="https://www.linkedin.com" target="_blank"> <i className="fa-brands fa-linkedin" /> </Link> </li>
                                <li> <Link className="instagram" to="https://www.instagram.com" target="_blank"><i className="fa-brands fa-instagram" /> </Link> </li>
                                <li> <Link className="facebook" to="https://www.facebook.com" target="_blank"><i className="fa-brands fa-facebook-f" /> </Link> </li>
                                <li> <Link className="x-twitter" to="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter" /> </Link> </li>
                                <li> <Link className="youtube" to="https://www.youtube.com" target="_blank"><i className="fa-brands fa-youtube" /> </Link> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
export default Teams;