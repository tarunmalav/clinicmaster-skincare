import { Swiper, SwiperSlide } from "swiper/react";
import { clientdata } from "../constant/alldata";

function ClientLogo() {
    return (
        <>
            <Swiper
                className="swiper client-swipe"
                slidesPerView={6}
                loop={true}
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