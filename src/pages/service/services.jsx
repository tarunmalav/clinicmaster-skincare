import { Link } from "react-router-dom";
import FlexSwiper from "../../component/flexswiper";
import Frequently from "../../component/frequently";
import PageBanner from "../../component/pagebanner";
import TestimoniulSwiper from "../../component/testimoniulswiper";
import WhyChoose from "../../component/whychoose";
import { marqueelist1, marqueelist2 } from "../../constant/alldata";
import { IMAGES } from "../../constant/theme";
import Footer from "../../layout/footer";
import Header from "../../layout/Header";
import AfterTreatment from "../../component/aftertreatment";
import CompareSwiper from "../../component/compareswiper";
import ScrolltoTop from "../../component/scrolltotop";

function Services() {
    return (
        <>
            <Header />
            <main className="page-content">
                <PageBanner title={"Services"} />
                <section className="content-inner-2 bg-light">
                    <div className="container">
                        <div className="section-head style-3 m-b30 text-center wow fadeInUp" data-wow-delay="0.2s"
                            data-wow-duration="0.8s">
                            <h2 className="title"> Transform Your Skin with Our <br /> Advanced Dermatology Treatments </h2>
                            <p className="mw-100"> Experience a transformative journey that sculpts your physique and unlocks your full potential. </p>
                        </div>
                        <FlexSwiper />
                        <div className="dz-separator style-3">
                            <Link to="services" className="btn separator-badge fw-medium">View All Services</Link>
                        </div>
                    </div>
                </section>
                <section className="content-inner bg-light bg-bottom-half-white">
                    <div className="container">
                        <div className="section-head style-3 text-center m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <h2 className="title m-b0"> After Treatment </h2>
                        </div>
                        <AfterTreatment />
                    </div>
                </section>
                <div className="dz-marquee style-1 bg-secondary overflow-hidden">
                    <ul className="marquee-list">
                        {marqueelist1.map((data, i) => (
                            <li key={i} className="item wow bounceIn" data-wow-delay={data.delay} data-wow-duration="0.8s"> {data.title} </li>
                        ))}
                    </ul>
                </div>
                <section className="content-inner">
                    <div className="container">
                        <div className="row content-wrapper style-14 align-items-center">
                            <WhyChoose />
                        </div>
                    </div>
                </section>
                <section className="content-inner-1 overflow-hidden">
                    <CompareSwiper />
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
                <div className="dz-marquee style-2">
                    <ul className="marquee-list">
                        {marqueelist2.map((data, i) => (
                            <li key={i} className={`item wow bounceIn ${data.columnstand}`} data-wow-delay={data.delay} data-wow-duration="0.8s"> {data.title} </li>
                        ))}
                    </ul>
                </div>
                <section className="content-inner">
                    <div className="container">
                        <div className="row content-wrapper style-5 align-items-center">
                            <Frequently />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <ScrolltoTop />
        </>
    )
}
export default Services;
