import { Swiper, SwiperSlide } from "swiper/react";
import { IMAGES } from "../constant/theme";
import { Link } from "react-router-dom";
import { useState } from "react";
import { flexswiperdata } from "../constant/alldata";
import { Autoplay } from "swiper/modules";

function FlexSwiper() {
    const [active, setActive] = useState(1);
    return (
        <>
            <Swiper
                className="dz-flex-wrapper m-b30 swiper dz-flex-swiper wow fadeInUp"
                speed={500}
                loop={false}
                slidesPerView={'auto'}
                spaceBetween={0}
                autoplay={{
                    delay: 3000,
                }}
                breakpoints={{
                    991: {
                        slidesPerView: 'auto',
                    },
                    320: {
                        slidesPerView: 1,
                    },
                }}
                modules={[Autoplay]}
            >
                {flexswiperdata.map((data, i) => (
                    <SwiperSlide key={i} className={`dz-flex-item ${active === data.id ? "active" : ""}`} onClick={() => setActive(data.id)} >
                        <div className="dz-flex-head" style={{ backgroundImage: `url(${data.image})` }}>
                            <Link to="/service-detail" className="btn btn-square btn-lg btn-white btn-shadow btn-rounded"> <i className="feather icon-arrow-up-right" /> </Link>
                            <h3 className="title"> {data.title} </h3>
                        </div>
                        <div className="dz-flex-info">
                            <div className="dz-flex-inner">
                                <div className="dz-media">
                                    <img src={data.image} alt="/" />
                                    <Link to="/appointment" className="btn btn-white"> <i className="feather icon-calendar m-r5 text-primary" /> Book An appointment </Link>
                                </div>
                                <div className="dz-info">
                                    <div className="dz-info-top">
                                        <h3 className="dz-title"> {data.title} </h3>
                                        <p className="text"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                        <ul className="list-check-try fw-medium m-b30">
                                            <li> Excellent Laporatery </li>
                                            <li> World class Infrastructure </li>
                                            <li> Health Checkups </li>
                                        </ul>
                                    </div>
                                    <div className="item1">
                                        <div className="info-widget style-14">
                                            <div className="info-widget-profile">
                                                <div className="widget-media">
                                                    <img src={IMAGES.middleavtar1} alt="" />
                                                </div>
                                                <div className="widget-content">
                                                    <h6 className="title mb-0"> Nashid Martines </h6>
                                                    <p className="text mb-0"> Cardiac Surgery </p>
                                                </div>
                                            </div>
                                            <Link to="/service-detail" className="btn btn-lg btn-square btn-primary rounded-circle"> <i className="feather icon-arrow-up-right" /> </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}
export default FlexSwiper;