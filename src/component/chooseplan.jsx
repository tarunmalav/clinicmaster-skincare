import { Link } from "react-router-dom";
import { IMAGES } from "../constant/theme";
import { pricinglistdata } from "../constant/alldata";
import { useState } from "react";

function ChoosePlan() {
    const [isYearly, setIsYearly] = useState(true);
    const handleToggle = (isYearly) => {
        setIsYearly(isYearly);
    };
    return (
        <>
            <div className="col-xxl-3 col-lg-12 col-md-6 m-b30">
                <div className="section-head style-3 m-b30 row align-items-end wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                    <h2 className="title"> Choose <br /> Your Plan </h2>
                    <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                </div>
                <Link to="/service-detail" className="btn btn-icon btn-lg btn-primary btn-shadow w-auto wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                    View All Services
                    <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                </Link>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-6 m-b30 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                <div className="content-bx style-4 bg-primary">
                    <h3 className="title"> <span>Save More</span>With Good Plans. </h3>
                    <p> Choose a plan and get onboard in minutes. Then get $100 credits for your next payment. </p>
                    <Link to="/pricing-table" className="btn-link"><i className="feather icon-arrow-right text-white" /></Link>
                    <div className="dz-media">
                        <img src={IMAGES.teamads} alt="" />
                    </div>
                </div>
            </div>
            <div className="col-xxl-5 col-xl-8 col-lg-7 align-self-stretch m-b30">
                <div className="pricingtable-wrapper style-1 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
                    <div className="pricingtable-inner">
                        <div className="left-box">
                            <div className="toggle-tabs toggle-tabs2 monthly m-b15">
                                <span className={`monthly ${!isYearly ? 'active' : ''}`} >Monthly</span>
                                <div className="toggle" onClick={() => handleToggle(!isYearly)}></div>
                                <span className={`yearly ${isYearly ? 'active' : ''}`}>Yearly</span>
                            </div>
                            <div className="pricingtable-list">
                                <h4 className="list-title"> Select Service </h4>
                                <ul className="pricingtable-features">
                                    {pricinglistdata.map((data, i) => (
                                        <li className={data.columnstand} key={i}> {data.title} </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="right-box">
                            <div className="clearfix">
                                <div className={`pricingtable-price month ${isYearly ? 'd-none' : 'd-block'}`}>
                                    <h2 className="pricingtable-bx"> $99<small>/ Monthly</small> </h2>
                                </div>
                                <div className={`pricingtable-price year ${isYearly ? 'd-block' : 'd-none'}`}>
                                    <h2 className="pricingtable-bx"> $1049<small>/ Yearly</small> </h2>
                                </div>
                                <p className="m-b20"> It is a long established fact that a reader will be distracted. </p>
                                <div className="pricingtable-title">
                                    <h3 className="title"> What You’ll Get </h3>
                                </div>
                                <div className="pricingtable-list">
                                    <ul className="pricingtable-features">
                                        <li> Consultations </li>
                                        <li> 24x7 Support </li>
                                        <li> 1 month checkup free </li>
                                        <li> Free Medicines </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="pricingtable-button mt-auto">
                                <Link to="/pricing-table" className="btn btn-secondary btn-hover1 w-100 m-t30"><span>Choose</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ChoosePlan;