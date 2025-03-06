import { Swiper, SwiperSlide } from "swiper/react";
import { clientdata } from "../constant/alldata";
import { Autoplay } from "swiper/modules";

function ClientLogo() {
    return (
        <>
            <Swiper
                className="swiper client-swipe"
                slidesPerView={6}
                loop={true}
                autoplay={{
                    delay: 1500,
                }}
                modules={[Autoplay]}
            >
                {clientdata.map((data, i) => (
                    <SwiperSlide key={i} className="wow bounceIn">
                        <div className="clients-logo1">
                            <img src={data.image} alt="" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </>
    )
}
export default ClientLogo;