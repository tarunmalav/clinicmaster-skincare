import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, FreeMode, Thumbs } from "swiper/modules";
import { Link } from "react-router-dom";
import { useState } from "react";
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/effect-fade';
import { verticaldata1, verticaldata2 } from "../constant/alldata";

function VerticalSwiper() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            <div className="col-lg-5 m-b30 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                <Swiper
                    className="swiper blog-vertical-swiper content-media"
                    slidesPerView={1}
                    effect="fade"
                    grabCursor={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    navigation={{
                        nextEl: '.blog-swiper-next',
                        prevEl: '.blog-swiper-prev',
                    }}
                    autoplay={{
                        delay: 1500,
                    }}
                    modules={[Autoplay,FreeMode, Thumbs, EffectFade]}
                >
                    {verticaldata1.map((data, i) => (
                        <SwiperSlide key={i}>
                            <div className="dz-media radius-md">
                                <img src={data.image} alt="" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="col-lg-7 m-b30 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
                <Swiper
                    className="swiper blog-vertical-swiper-thumb content-info"
                    direction="vertical"
                    slidesPerView={3}
                    mousewheel={false}
                    autoplay={{
                        delay: 3000,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            direction: 'horizontal',
                        },
                        767: {
                            slidesPerView: 2,
                            direction: 'vertical',
                        },
                        1191: {
                            slidesPerView: 3,
                        },
                    }}
                    onSwiper={setThumbsSwiper}
                    modules={[FreeMode, Thumbs, Autoplay]}
                >
                    {verticaldata2.map((data, i) => (
                        <SwiperSlide key={i}>
                            <div className="dz-card style-3 blog-half">
                                <div className="dz-info">
                                    <div className="dz-meta">
                                        <ul>
                                            <li className="post-date"> 12 Jan 2025 </li>
                                        </ul>
                                    </div>
                                    <h3 className="dz-title">
                                        <Link to="/blog-details">Radiant reflections expert dermatology and skin.</Link>
                                    </h3>
                                    <p> It is a long established fact that a reader will be distracted by the readable content. </p>
                                </div>
                                <div className="dz-media">
                                    <img src={data.image} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}
export default VerticalSwiper;