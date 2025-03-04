import { Link } from "react-router-dom";
import { IMAGES, SVGICON } from "../constant/theme";
import ModalVideo from "react-modal-video";
import { useState } from "react";
import RotateBoxModal from "./rotateboxmodal";

function SkinCard1() {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className="col-xl-5 col-lg-6 m-b15">
                <div className="content-media" data-bottom-top="transform: translateY(-30px)" data-top-bottom="transform: translateY(30px)" >
                    <div className="dz-media">
                        <img src={IMAGES.about1} alt="" />
                    </div>
                    <div className="item4">
                        {SVGICON.item4}
                    </div>
                    <div className="item3" data-bottom-top="transform: translateY(-30px)" data-top-bottom="transform: translateY(30px)" >
                        <Link onClick={() => setOpen(true)} className="popup-youtube" to="#" >
                            <RotateBoxModal />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-xl-7 col-lg-6 m-b30 position-relative">
                <div className="info-content">
                    <div className="section-head style-1 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s" >
                        <h2 className="title m-b15"> Beyond Skin Deep Personalized Care for Your Unique Beauty Journey description At ClinicMaster </h2>
                        <p> We believe healthy, radiant skin is achievable for everyone. We combine advanced dermatology with innovative cosmetic solutions to address your unique skin concerns. Our team of board-certified dermatologists and experienced aestheticians create personalized treatment plans to achieve your desired results, whether it's treating acne, restoring sun damage, or enhancing your natural beauty. Explore our website to learn more about our services and discover the confidence that comes with feeling your best in your own skin. </p>
                    </div>
                    <div className="d-flex align-items-center m-b15 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s" >
                        <div className="info-widget style-12 m-r20 bg-transparent border border-secondary" >
                            <div className="avatar-group">
                                <img className="avatar rounded-circle avatar-md border border-white border-2" src={IMAGES.smallavatar1} alt="" />
                                <img className="avatar rounded-circle avatar-md border border-white border-2" src={IMAGES.smallavatar2} alt="" />
                                <img className="avatar rounded-circle avatar-md border border-white border-2" src={IMAGES.smallavatar3} alt="" />
                                <img className="avatar rounded-circle avatar-md border border-white border-2" src={IMAGES.smallavatar4} alt="" />
                            </div>
                            <div className="clearfix">
                                <span>Talk to over 215 doctor</span>
                            </div>
                        </div>
                        <Link to="/about-us" className="btn btn-square btn-xl btn-white btn-rounded" >
                            {SVGICON.arrowup}
                        </Link>
                    </div>
                    <div className="widget-rating3 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s" >
                        <ul className="star-list">
                            <li><i className="fa fa-star text-orange" /></li>
                            <li><i className="fa fa-star text-orange" /></li>
                            <li><i className="fa fa-star text-orange" /></li>
                            <li><i className="fa fa-star text-orange" /></li>
                            <li><i className="fa fa-star text-orange" /></li>
                        </ul>
                        <span className="rating">(4.8)</span>
                        <span className="text">12k+ ratings on google</span>
                    </div>
                    <div className="bottom-media" data-bottom-top="transform: translateY(-30px)" data-top-bottom="transform: translateY(30px)" >
                        <img src={IMAGES.about2} className="item1" alt="" />
                        <img src={IMAGES.about3} className="item2" alt="" />
                    </div>
                </div>
            </div>
            <ModalVideo
                channel='youtube'
                allowFullScreen
                isOpen={isOpen}
                videoId='o8OgzQdA70c'
                onClose={() => setOpen(false)}
            />
        </>
    )
}
export default SkinCard1; 