import BestDentist from "../../component/bestdentist";
import ChoosePlan from "../../component/chooseplan";
import Frequently from "../../component/frequently";
import PageBanner from "../../component/pagebanner";
import ScrolltoTop from "../../component/scrolltotop";
import SkinCard1 from "../../component/skincard1";
import TestimoniulSwiper from "../../component/testimoniulswiper";
import WhyChoose from "../../component/whychoose";
import { marqueelist1, marqueelist2 } from "../../constant/alldata";
import { IMAGES } from "../../constant/theme";
import Footer from "../../layout/footer";
import Header from "../../layout/Header";

function AboutUs() {
    return (
        <>
            <Header />
            <main className="page-content">
                <PageBanner title={"About Us"} />
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
                <section className="content-inner">
                    <div className="container">
                        <div className="row content-wrapper style-5 align-items-center">
                            <Frequently />
                        </div>
                    </div>
                </section>
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
                <section className="content-inner">
                    <div className="container">
                        <div className="row content-wrapper style-14 align-items-center">
                            <WhyChoose />
                        </div>
                    </div>
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
            </main>
            <Footer />
            <ScrolltoTop />
        </>
    )
}
export default AboutUs;
