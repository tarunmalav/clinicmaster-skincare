import { Link } from "react-router-dom";
import BestDentist from "../../component/bestdentist";
import ChoosePlan from "../../component/chooseplan";
import PageBanner from "../../component/pagebanner";
import SkinCard1 from "../../component/skincard1";
import TestimoniulSwiper from "../../component/testimoniulswiper";
import { marqueelist1, marqueelist2 } from "../../constant/alldata";
import { IMAGES } from "../../constant/theme";
import Footer from "../../layout/footer";
import Header from "../../layout/Header";
import CompareSwiper from "../../component/compareswiper";
import ClientLogo2 from "../../component/clientlogo2";
import Appointment from "../../component/appointment";
import ModalVideo from "react-modal-video";
import { useState } from "react";
import ScrolltoTop from "../../component/scrolltotop";

function AboutUs2() {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <Header />
            <main className="page-content">
                <PageBanner title={"About Us 2"} />
                <section className="content-inner bg-light">
                    <div className="container">
                        <div className="row content-wrapper style-13">
                            <SkinCard1 />
                        </div>
                    </div>
                </section>
                <div className="dz-marquee style-1 bg-secondary overflow-hidden">
                    <ul className="marquee-list">
                        {marqueelist1.map((data, i) => (
                            <li key={i} className="item wow bounceIn" data-wow-delay={data.delay} data-wow-duration="0.8s"> {data.title} </li>
                        ))}
                    </ul>
                </div>
                <div className="overlay-secondary-light video-wrapper2 bg-img-fix" style={{ backgroundImage: `url(${IMAGES.bg2})`, backgroundPosition: 'center' }}>
                    <div className="video-bx2">
                        <Link onClick={() => setOpen(true)} to="#" className="video-btn video-lg popup-youtube">
                            <i className="fa fa-play" />
                        </Link>
                        <ModalVideo
                            channel='youtube'
                            allowFullScreen
                            isOpen={isOpen}
                            videoId='o8OgzQdA70c'
                            onClose={() => setOpen(false)}
                        />
                    </div>
                </div>
                <section className="content-inner bg-light">
                    <div className="container">
                        <div className="row align-items-center pricingtable-content-wrapper">
                            <ChoosePlan />
                        </div>
                    </div>
                </section>
                <div className="dz-marquee style-2 bg-light">
                    <ul className="marquee-list">
                        {marqueelist2.map((data, i) => (
                            <li key={i} className={`item wow bounceIn ${data.columnstand}`} data-wow-delay={data.delay} data-wow-duration="0.8s"> {data.title} </li>
                        ))}
                    </ul>
                </div>
                <section className="content-inner-3 bg-light pb-0 overflow-hidden">
                    <div className="container">
                        <div className="row content-wrapper style-17 align-items-end justify-content-center">
                            <BestDentist />
                        </div>
                    </div>
                </section>
                <section className="content-inner-1 overflow-hidden">
                    <CompareSwiper />
                </section>
                <section className="content-inner-1 p-t0">
                    <Appointment />
                </section>
                <img src={IMAGES.gallery} alt="" className="w-100" />
                <section className="content-inner pt-0">
                    <div className="container">
                        <div className="section-head style-1 text-center wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <h2 className="title m-b10"> What our patient say </h2>
                            <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                        </div>
                        <TestimoniulSwiper />
                    </div>
                </section>
                <section className="content-inner-3 bg-light">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-4">
                                <div className="section-head style-1 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                    <h2 className="title m-b0">Our Accepted insurance</h2>
                                </div>
                            </div>
                            <div className="col-xl-8 m-b30">
                                <ClientLogo2 />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <ScrolltoTop />
        </>
    )
}
export default AboutUs2;
