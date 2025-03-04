import { Link } from "react-router-dom";
import { IMAGES, SVGICON } from "../constant/theme";

function WhyChoose() {
    return (
        <>
            <div className="col-xl-6 col-lg-5 m-b30">
                <div className="content-info">
                    <div className="section-head style-1 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                        <h2 className="title"> why choose us </h2>
                        <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                    </div>
                    <ul className="list-check-circle-small text-secondary grid-2 m-b35 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                        <li> Comprehensive Specialties </li>
                        <li> Research and Development </li>
                        <li> Emergency Services </li>
                        <li> Advanced Imaging Services </li>
                        <li> Intensive Care Units (ICUs) </li>
                        <li> Rehabilitation Services </li>
                        <li> Telemedicine Facilities </li>
                        <li> Patient-Centric Approach </li>
                        <li> Multidisciplinary Team </li>
                        <li> Health Information Technology </li>
                    </ul>
                    <div className="d-flex flex-wrap align-items-center wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                        <Link to="/appointment" className="btn btn-lg btn-icon btn-secondary btn-shadow m-r40 mb-3 mb-xl-0"> Appointment
                            <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                        </Link>
                        <div className="info-widget style-5">
                            <div className="widget-media text-primary">
                                <i className="feather icon-phone-call" />
                            </div>
                            <div className="widget-content">
                                <h6 className="title"> Contact us? </h6>
                                <Link to="tel:+11234567890" className="text-secondary">+1 123 456 7890</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-6 col-lg-7 m-b30">
                <div className="content-media">
                    <div className="row justify-content-center">
                        <div className="col-sm-6" data-bottom-top="transform: translateY(-50px)"
                            data-top-bottom="transform: translateY(50px)">
                            <div className="img1">
                                <img src={IMAGES.about6} alt="" />
                                <div className="video-bx1">
                                    {SVGICON.videobx}
                                    <span>Video Call <br /> Support</span>
                                </div>
                                <div className="call-widget">
                                    <Link to={"#"}> {SVGICON.camera} </Link>
                                    <Link to={"#"}> {SVGICON.massage} </Link>
                                    <Link to={"#"} className="active"> {SVGICON.callend} </Link>
                                    <Link to={"#"}> {SVGICON.mute} </Link>
                                    <Link to={"#"}> {SVGICON.video} </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6" data-bottom-top="transform: translateY(50px)" data-top-bottom="transform: translateY(-50px)">
                            <div className="widget-rating2">
                                <img src={IMAGES.google} alt="" />
                                <div className="clearfix">
                                    <div className="d-flex">
                                        <ul className="star-list">
                                            <li> <i className="fa fa-star" /> </li>
                                            <li> <i className="fa fa-star" /> </li>
                                            <li> <i className="fa fa-star" /> </li>
                                            <li> <i className="fa fa-star" /> </li>
                                            <li> <i className="fa fa-star" /> </li>
                                        </ul>
                                        <span className="rating ms-1">(4.8)</span>
                                    </div>
                                    <span className="text">12k+ ratings on google</span>
                                </div>
                            </div>
                            <div className="img2">
                                <img src={IMAGES.about7} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default WhyChoose;