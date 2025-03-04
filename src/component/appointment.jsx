import { Link } from "react-router-dom";
import { IMAGES } from "../constant/theme";

function Appointment() {
    return (
        <>
            <div className="container">
                <div className="content-bx style-10 row g-0 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                    <div className="col-md-6">
                        <div className="dz-media">
                            <img src={IMAGES.about8} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2 className="title">Want To Schedule An Appointment?</h2>
                        <Link to="appointment" className="btn btn-lg btn-icon btn-primary btn-shadow">
                            <span className="w-100">Appointment</span> <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Appointment;