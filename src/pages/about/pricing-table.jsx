import PageBanner from "../../component/pagebanner";
import ChoosePlan from "../../component/chooseplan";
import TestimoniulSwiper from "../../component/testimoniulswiper";
import { IMAGES } from "../../constant/theme";
import Footer from "../../layout/footer";
import Header from "../../layout/Header";
import Frequently from "../../component/frequently";
import ScrolltoTop from "../../component/scrolltotop";

function PricingTable() {
    return (
        <>
            <Header />
            <main className="page-content">
                <PageBanner title={"Pricing Table"} />
                <section className="content-inner bg-light">
                    <div className="container">
                        <div className="row align-items-center pricingtable-content-wrapper">
                            <ChoosePlan />
                        </div>
                    </div>
                </section>
                <section className="content-inner">
                    <div className="container">
                        <div className="row content-wrapper style-5 align-items-center">
                            <Frequently />
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
export default PricingTable;
