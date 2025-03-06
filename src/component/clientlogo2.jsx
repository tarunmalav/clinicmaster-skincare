import { Swiper, SwiperSlide } from "swiper/react";
import { clientdata2 } from "../constant/alldata";
import { Autoplay } from "swiper/modules";

function ClientLogo2() {
    return (
        <>
            <Swiper
                className="wiper client-swiper2"
                slidesPerView={4}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 1500,
                }}
                breakpoints={{
                    767: {
                        slidesPerView: 4,
                    },
                    575: {
                        slidesPerView: 3
                    },
                    320:{
                        slidesPerView: 2
                    },
                }}
                modules={[Autoplay]}
            >
                {clientdata2.map((data, i) => (
                    <SwiperSlide key={i} className="wow bounceIn" data-wow-delay={data.delay} data-wow-duration="0.8s">
                        <div className="clients-logo2 hover-white">
                            <img src={data.image} alt="" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}
export default ClientLogo2;

