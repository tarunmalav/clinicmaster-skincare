import { Swiper, SwiperSlide } from "swiper/react";
import { clientdata2 } from "../constant/alldata";

function ClientLogo2() {
    return (
        <>
            <Swiper
                className="wiper client-swiper2"
                slidesPerView={4}
                loop={true}
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

