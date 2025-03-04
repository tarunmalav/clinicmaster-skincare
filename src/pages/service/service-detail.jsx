
import { Link } from "react-router-dom";
import PageBanner from "../../component/pagebanner";
import Footer from "../../layout/footer";
import Header from "../../layout/Header";
import { IMAGES, SVGICON } from "../../constant/theme";
import Accordion from 'react-bootstrap/Accordion';
import { accordiandata } from "../../constant/alldata";
import ScrolltoTop from "../../component/scrolltotop";


function ServiceDetail() {
    return (
        <>
            <Header />
            <main className="page-content">
                <PageBanner title={"Service Detail"} />
                <section className="content-inner service-single bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 single-inner order-lg-1">
                                <div className="single-media dz-media single-media height-sm radius-lg wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                    <img src={IMAGES.servicelarge1} alt="" className="object-fit-cover" />
                                </div>
                                <div className="content-item wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                    <h2>Cosmetic Dermatology</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including.</p>
                                </div>
                                <div className="content-item row g-4 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                                    <div className="col-xl-6">
                                        <div className="dz-media height-sm radius-lg me-xl-4">
                                            <img src={IMAGES.service1} alt="" className="object-fit-cover" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <h4>Benefits of Cosmetic Dermatology:</h4>
                                        <p className="fs-6 fw-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                        <ul className="list-style-1">
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
                                <div className="content-item wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
                                    <h3>Long term care services</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including.</p>
                                </div>
                                <div className="content-item wow fadeInUp" data-wow-delay="1.0s" data-wow-duration="0.8s">
                                    <h3>Frequently Asked Questions</h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    <Accordion className="accordion dz-accordion style-3" defaultActiveKey="0">
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
                            <div className="col-lg-4 m-b30">
                                <aside className="side-bar sticky-top left">
                                    <div className="widget service_menu_nav wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                        <div className="widget-title">
                                            <h4 className="title">All Services</h4>
                                        </div>
                                        <ul>
                                            <li className="active"><Link to="/service-detail">Cosmetic Dermatology</Link></li>
                                            <li><Link to="/service-detail">Dermatologic Surgery</Link></li>
                                            <li><Link to="/service-detail">Earlobe Repair</Link></li>
                                            <li><Link to="/service-detail">Laser Resurfacing</Link></li>
                                            <li><Link to="/service-detail">Anti Aging</Link></li>
                                            <li><Link to="/service-detail">Earlobe Repair</Link></li>
                                            <li><Link to="/service-detail">Laser Resurfacing</Link></li>
                                            <li><Link to="/service-detail">Anti Aging</Link></li>
                                        </ul>
                                    </div>
                                    <div className="widget_contact widget_contact_light wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                        <div className="widget-content">
                                            {SVGICON.Question2}
                                            <h4 className="title">Do you need any help?</h4>
                                            <div className="phone-number">
                                                <Link to="tel:+11234567890">+1 123 456 7890</Link>
                                            </div>
                                            <div className="email">
                                                <Link to="mailto:info@support.com">info@support.com</Link>
                                            </div>
                                            <div className="link-btn">
                                                <Link to="/contact-us" className="btn btn-lg btn-icon btn-primary btn-shadow">
                                                    Contact Us <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
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
export default ServiceDetail;
