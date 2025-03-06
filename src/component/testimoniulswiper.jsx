import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/css/pagination';
import { testmoniuldata } from "../constant/alldata";

function TestimoniulSwiper() {
    return (
        <>
            <Swiper
                className="swiper testimonial-swiper3 testimonial-wrapper3"
                slidesPerView={1}
                loop={true}
                pagination={{
                    el: ".swiper-pagination",
                    clickable: true
                }}
                autoplay={{
                    delay: 1500,
                }}
                modules={[Autoplay, Pagination]}
            >
                {testmoniuldata.map((data, i) => (
                    <SwiperSlide key={i}>
                        <div className="testimonial-3">
                            <div className="testimonial-detail">
                                <div className="testimonial-contant">
                                    <div className="testimonial-text">
                                        <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a making it look like readable English. </p>
                                    </div>
                                </div>
                                <div className="testimonial-info">
                                    <div className="clearfix">
                                        <h5 className="testimonial-name">{data.title} </h5>
                                        <span className="testimonial-position">Postgraduate Student</span>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-media">
                                <img src={data.image} alt="" />
                                <div className="item1">
                                    <div className="info-widget">
                                        <ul className="star-list">
                                            <li> <i className="fa fa-star" /> </li>
                                            <li> <i className="fa fa-star" /> </li>
                                            <li> <i className="fa fa-star" /> </li>
                                            <li> <i className="fa fa-star" /> </li>
                                            <li> <i className="fa fa-star" /> </li>
                                        </ul>
                                        <h3 className="title m-b0"> Best Treatment </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="testimonial-pagination-swiper3 swiper-pagination style-1"></div>
            </Swiper>
        </>
    )
}
export default TestimoniulSwiper;