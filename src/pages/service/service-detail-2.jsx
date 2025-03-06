import { Link } from "react-router-dom";
import { IMAGES } from "../../constant/theme";
import Footer from "../../layout/footer";
import CompareSwiper from "../../component/compareswiper";
import { accordiandata, teamdata } from "../../constant/alldata";
import { Accordion } from "react-bootstrap";
import MainHeader from "../../layout/mainheader";
import ScrolltoTop from "../../component/scrolltotop";
import { useState } from "react";

function ServiceDetail2() {
    const [hover, setHover] = useState(1);
    return (
        <>
            <MainHeader />
            <main className="page-content">
                <div className="dz-bnr-inr style-1 detail-bx overlay-secondary-dark dz-bnr-inr-md" style={{ backgroundImage: `url(${IMAGES.bnr1})` }}>
                    <div className="container">
                        <div className="dz-bnr-inr-entry row">
                            <div className="col-xl-6 col-lg-7">
                                <div className="dz-bnr-bx" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
                                    <h1 className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Cosmetic Dermatology</h1>
                                    <p className="wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">Dermatologists use botulinum toxin therapy to reduce signs of aging and to treat hyperhidrosis, a medical condition characterized by excessive sweating</p>
                                    <div className="d-flex flex-wrap align-items-center bottom-info wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                                        <Link to="appointment" className="btn btn-lg btn-icon btn-primary btn-shadow m-r40 mb-3 mb-sm-0">
                                            Appointment
                                            <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                                        </Link>
                                        <div className="info-widget style-5">
                                            <div className="widget-media text-primary">
                                                <i className="feather icon-phone-call dz-ring-effect" />
                                            </div>
                                            <div className="widget-content">
                                                <h6 className="title">Contact us?</h6>
                                                <Link to="tel:+11234567890" className="text-secondary">+1 123 456 7890</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dz-media">
                        <img src={IMAGES.servicebnr2} alt="" />
                    </div>
                </div>
                <section className="content-inner">
                    <div className="container">
                        <div className="timeline-wrapper style-2">
                            <div className="timeline-inner row g-0">
                                <div className="timeline-wrap col-lg-3 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                    <div className="timeline-head">
                                        <div className="timeline-number">1</div>
                                    </div>
                                    <div className="timeline-info">
                                        <h2 className="title">Initial Consultation</h2>
                                        <p>Review medical history, analyze skin, discuss treatments, and provide cost estimate.</p>
                                    </div>
                                </div>
                                <div className="timeline-wrap col-lg-3 m-b30 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                    <div className="timeline-head">
                                        <div className="timeline-number">2</div>
                                    </div>
                                    <div className="timeline-info">
                                        <h2 className="title">Pre Treatment Preparation</h2>
                                        <p>Review medical history, analyze skin, discuss treatments, and provide cost estimate.</p>
                                    </div>
                                </div>
                                <div className="timeline-wrap col-lg-3 m-b30 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                                    <div className="timeline-head">
                                        <div className="timeline-number">3</div>
                                    </div>
                                    <div className="timeline-info">
                                        <h2 className="title">Treatment Session</h2>
                                        <p>Review medical history, analyze skin, discuss treatments, and provide cost estimate.</p>
                                    </div>
                                </div>
                                <div className="timeline-wrap col-lg-3 m-b30 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
                                    <div className="timeline-head">
                                        <div className="timeline-number">4</div>
                                    </div>
                                    <div className="timeline-info">
                                        <h2 className="title">Post Treatment Care</h2>
                                        <p>Review medical history, analyze skin, discuss treatments, and provide cost estimate.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-wrapper style-23 bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6">
                                <div className="content-media wow fadeIn" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                    <img src={IMAGES.service1} alt="" className="object-fit-cover" />
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-6 align-self-center">
                                <div className="content-info">
                                    <div className="section-head style-1 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                        <h2 className="title m-b15">What is Cosmetic Dermatology ?</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including.</p>
                                    </div>
                                    <div className="section-head style-1 m-b30 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                        <h2 className="title m-b15">Benefits of Cosmetic Dermatology</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                    </div>
                                    <ul className="list-style-1 list-lg wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                                        <li>
                                            <h6 className="title">Enhanced Appearance</h6>
                                            <p>Helps improve the overall aesthetic appeal of the skin, making it look more youthful and refreshed.</p>
                                        </li>
                                        <li>
                                            <h6 className="title">Boost in Confidence</h6>
                                            <p>Many individuals experience an increase in self-esteem and confidence after cosmetic treatments.</p>
                                        </li>
                                        <li>
                                            <h6 className="title">Addressing Skin Imperfections</h6>
                                            <p>Effective in treating acne scars, pigmentation issues, and other skin imperfections.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-inner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-6 pe-lg-5 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                <div className="section-head style-1 m-b30">
                                    <h2 className="title m-b20">Available Doctors<br /> Under Surgery</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie.</p>
                                </div>
                            </div>
                            {teamdata.slice(0, teamdata.length -2).map((data, i) => (
                                <div className="col-xl-3 col-sm-6 m-b30 wow fadeInUp" data-wow-delay={data.dealy} data-wow-duration="0.8s" key={i}>
                                    <div className={`dz-team style-2 box-hover ${hover === data.id ? "active" : ""}`} onMouseEnter={() => setHover(data.id)}>
                                        <div className="dz-content">
                                            <h3 className="dz-name">
                                                <Link to="/team-detail">{data.title}</Link>
                                            </h3>
                                            <span className="dz-position">Cardiac Surgery</span>
                                        </div>
                                        <div className="dz-media">
                                            <img src={data.image} alt="/" />
                                            <Link to="/appointment" className="btn btn-primary"> <i className="feather icon-calendar m-r5" /> Appointment Now </Link>
                                            <ul className="dz-social">
                                                <li> <Link className="linkedin" to="https://www.linkedin.com/showcase/dexignzone/" target="_blank"> <i className="fa-brands fa-linkedin" /> </Link> </li>
                                                <li> <Link className="instagram" to="https://www.instagram.com/dexignzone/" target="_blank"><i className="fa-brands fa-instagram" /> </Link> </li>
                                                <li> <Link className="facebook" to="https://www.facebook.com/dexignzone" target="_blank"><i className="fa-brands fa-facebook-f" /> </Link> </li>
                                                <li> <Link className="x-twitter" to="https://x.com/dexignzone" target="_blank"><i className="fa-brands fa-x-twitter" /> </Link> </li>
                                                <li> <Link className="youtube" to="https://www.youtube.com/@dexignzone" target="_blank"><i className="fa-brands fa-youtube" /> </Link> </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="content-inner-1 bg-light overflow-hidden">
                    <CompareSwiper />
                </section>
                <section className="bg-light content-inner-2">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-10">
                                <div className="content-bx style-11 bg-white">
                                    <div className="section-head style-1 text-center wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                        <h2 className="title">Have A Question?</h2>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    </div>
                                    <Accordion className="accordion dz-accordion style-1 m-b35 wow fadeInUp" defaultActiveKey="0">
                                        {accordiandata.map((data, i) => (
                                            <Accordion.Item eventKey={data.key} key={i}>
                                                <Accordion.Header>{data.title}</Accordion.Header>
                                                <div className="accordion-collapse collapse show border-0">
                                                    <Accordion.Body>
                                                        <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its. The point of using Lorem Ipsum is that it has a more-or-less normal distribution </p>
                                                    </Accordion.Body>
                                                </div>
                                            </Accordion.Item>
                                        ))}
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-inner-1 bg-light">
                    <div className="container">
                        <div className="content-bx style-10 row g-0 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <div className="col-md-6">
                                <div className="dz-media">
                                    <img src={IMAGES.about8} alt="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h2 className="title">Want To Schedule An Appointment?</h2>
                                <Link to="appointment" className="btn btn-lg btn-icon btn-primary btn-shadow">
                                    <span className="w-100">Appointment</span> <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                                </Link>
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
export default ServiceDetail2;
