import { Swiper, SwiperSlide } from "swiper/react";
import { IMAGES } from "../constant/theme";
import { Autoplay, Navigation } from "swiper/modules";
import { compareswiperdata } from "../constant/alldata";
import 'swiper/css';
import 'swiper/css/navigation';

function CompareSwiper() {
    return (
        <>
            <div className="container">
                <div className="section-head style-1 row align-items-center mb-0">
                    <div className="col-sm-7 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                        <h2 className="title">Patient Skin Success Stories Before and After Results</h2>
                    </div>
                    <div className="col-sm-5 m-b30 d-none d-sm-block wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                        <div className="compare-swiper-btn justify-content-center justify-content-sm-end">
                            <div className="compare-swiper-prev">
                                <img src={IMAGES.leftarrow} alt="" />
                            </div>
                            <div className="compare-swiper-next">
                                <img src={IMAGES.rightarrow} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Swiper
                className="swiper compare-swiper compare-swiper-wrapper m-b15"
                slidesPerView={4}
                spaceBetween={20}
                autoplay={{
                    delay: 1500,
                }}
                loop={true}
                navigation={{
                    nextEl: '.compare-swiper-next',
                    prevEl: '.compare-swiper-prev',
                    clickable: true
                }}
                breakpoints={{
                    360: {
                        slidesPerView: 2.5,
                    },
                    768: {
                        slidesPerView: 4.5
                    }
                }}
                modules={[Navigation, Autoplay]}
            >
                {compareswiperdata.map((data, i) => (
                    <SwiperSlide key={i} className="wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.8s">
                        <div className="dz-media radius-xl">
                            <img src={data.image} alt="" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
export default CompareSwiper;