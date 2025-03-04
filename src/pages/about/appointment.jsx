import { Link } from "react-router-dom";
import PageBanner from "../../component/pagebanner";
import { IMAGES, SVGICON } from "../../constant/theme";
import Footer from "../../layout/footer";
import Header from "../../layout/Header";
import { appointmentmapdata } from "../../constant/alldata";
import FormBody from "../../component/formbody";
import ScrolltoTop from "../../component/scrolltotop";

function Appointment() {
    return (
        <>
            <Header />
            <main className="page-content">
                <PageBanner title={"Appointment"} />
                <section className="content-inner bg-light pb-0 overflow-hidden">
                    <div className="container">
                        <div className="row content-wrapper style-17 align-items-end justify-content-center">
                            <div className="col-xl-5 col-lg-12 order-xl-1 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                <div className="content-info">
                                    <div className="form-wrapper style-2 bg-secondary">
                                        <FormBody />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-8 pe-xl-5 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                <div className="content-media">
                                    <div className="dz-media">
                                        <img src={IMAGES.about5} alt="" />
                                    </div>
                                    <div className="item1">
                                        {SVGICON.item11}
                                    </div>
                                    <div className="item2" data-bottom-top="transform: translateY(-30px)" data-top-bottom="transform: translateY(30px)">
                                        <div className="info-widget style-10 move-3">
                                            <span className="content-text text-primary"><span className="counter">20</span>+</span>
                                            <h3 className="title m-b0"> Years <br /> Experienced </h3>
                                        </div>
                                    </div>
                                    <div className="item3" data-bottom-top="transform: translateY(-30px)" data-top-bottom="transform: translateY(30px)">
                                        <div className="dz-img-box style-1 move-4">
                                            <div className="dz-media">
                                                <img src={IMAGES.logologo1} alt="" />
                                            </div>
                                            <div className="dz-content">
                                                <h3 className="title"> ClinicMaster 2025 </h3>
                                                <p> Quality and Accreditation Institute </p>
                                                <Link to={"#"} className="btn-link">Best Dermatologists</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-inner">
                    <div className="container">
                        <div className="section-head style-3 text-center wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <h2 className="title m-b10">All Locations</h2>
                        </div>
                        <div className="row">
                            {appointmentmapdata.map((data, i) => (
                                <div className="col-xl-3 col-md-6 m-b30 wow fadeInUp" data-wow-delay={data.dealy} data-wow-duration="0.8s" key={i}>
                                    <div className="dz-img-box style-4">
                                        <div className="dz-head">
                                            <h3 className="title m-b10"><img src={data.image1} alt="" />{data.title}</h3>
                                        </div>
                                        <div className="dz-media">
                                            <img src={data.image2} alt="" />
                                        </div>
                                        <div className="dz-content">
                                            <p className="m-b10">123 Health Way, Suite 456 Goodland, 78910 United States</p>
                                            <Link to="tel:+0123-456-7890" className="text-body">+0 123-456-7890</Link>
                                        </div>
                                        <div className="dz-footer">
                                            <Link to="https://www.google.com/maps/" target="_blank" className="icon-link-hover-end">Get Directions <i className="feather icon-arrow-up-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <ScrolltoTop />
        </>
    )
}
export default Appointment;
