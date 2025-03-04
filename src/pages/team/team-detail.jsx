import { Link } from "react-router-dom";
import PageBanner from "../../component/pagebanner";
import { IMAGES } from "../../constant/theme";
import Footer from "../../layout/footer";
import Header from "../../layout/Header";
import FormBody from "../../component/formbody";
import ScrolltoTop from "../../component/scrolltotop";

function TeamDeatail() {
    return (
        <>
            <Header />
            <main className="page-content">
                <PageBanner title={"Team Detail"} />
                <section className="content-inner bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 m-b10 pe-xl-5">
                                <div className="section-head style-2 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                    <div className="sub-title">Best Dermatologists</div>
                                    <h2 className="title">About Dr. Nashid Martines</h2>
                                    <p className="fw-normal"><strong className="text-secondary fw-semibold">Dr. Nashid Martines</strong> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                </div>
                                <table className="table table-striped table-striped-white table-striped-rounded m-b40 m-md-b20 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                    <tbody>
                                        <tr>
                                            <th>Specialty</th>
                                            <td>Orthodontist Surgeon Specialize</td>
                                        </tr>
                                        <tr>
                                            <th>Degrees</th>
                                            <td><Link to={"#"}>MBBS University of California</Link></td>
                                        </tr>
                                        <tr>
                                            <th>Experience</th>
                                            <td>20+ years, New York Urgent Medical Care Serving California</td>
                                        </tr>
                                        <tr>
                                            <th>Awards</th>
                                            <td>2018 - 2019 : William Allan Award</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="clearfix m-b50 m-md-b20 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                                    <h3 className="text-primary title-dashed-separator">About Skills</h3>
                                    <ul className="list-check text-secondary fw-medium grid-2 m-b35">
                                        <li>Radiant Skin Dermatology</li>
                                        <li>Luminous Dermatology</li>
                                        <li>Flawless Dermatology</li>
                                        <li>Laser Resurfacing</li>
                                        <li>Refined Skin Dermatology</li>
                                        <li>Anti Aging</li>
                                    </ul>
                                </div>
                                <div className="info-widget widget-sm style-9 bg-white shadow-none m-b50 m-md-b20 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
                                    <div className="widget-content">
                                        <h2 className="title">My Time Schedule</h2>
                                        <ul>
                                            <li>Monday <span>09:30 - 07:30</span></li>
                                            <li>Tuesday <span>09:30 - 07:30</span></li>
                                            <li>Wednesday <span>09:30 - 07:30</span></li>
                                            <li>Thursday <span>09:30 - 07:30</span></li>
                                            <li>Friday <span>09:30 - 07:30</span></li>
                                            <li>Saturday <span>09:30 - 07:30</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="info-widget style-16 shadow-none m-b50 m-md-b20 wow fadeInUp" data-wow-delay="1.0s" data-wow-duration="0.8s">
                                    <div className="row g-xl-5 g-4">
                                        <div className="col-md-6">
                                            <div className="icon-bx-wraper style-1 align-items-center">
                                                <div className="icon-bx bg-primary">
                                                    <span className="icon-cell">
                                                        <i className="feather icon-phone" />
                                                    </span>
                                                </div>
                                                <div className="icon-content">
                                                    <h5 className="dz-title fw-semibold">Send us a Mail</h5>
                                                    <p><Link to="mailto:info@example.com" className="text-body">info@example.com</Link></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="icon-bx-wraper style-1 align-items-center">
                                                <div className="icon-bx bg-primary">
                                                    <span className="icon-cell">
                                                        <i className="feather icon-phone" />
                                                    </span>
                                                </div>
                                                <div className="icon-content">
                                                    <h5 className="dz-title fw-semibold">Call Us:</h5>
                                                    <p><Link to="tel:+11234567890" className="text-body">+0 123-456-7890</Link></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix wow fadeInUp" data-wow-delay="1.2s" data-wow-duration="0.8s">
                                    <h3 className="text-primary title-dashed-separator">My Awards</h3>
                                    <div className="row">
                                        <div className="col-md-6 m-b20">
                                            <div className="dz-img-box style-1">
                                                <div className="dz-media">
                                                    <img src={IMAGES.logologo1} alt="" />
                                                </div>
                                                <div className="dz-content">
                                                    <h3 className="title">ClinicMaster 2025</h3>
                                                    <p>Quality and Accreditation Institute</p>
                                                    <Link to={"#"} className="btn-link">Best Dermatologists</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 m-b20">
                                            <div className="dz-img-box style-1">
                                                <div className="dz-media">
                                                    <img src={IMAGES.logologo2} alt="" />
                                                </div>
                                                <div className="dz-content">
                                                    <h3 className="title">ClinicMaster 2025</h3>
                                                    <p>Quality and Accreditation Institute</p>
                                                    <Link to={"#"} className="btn-link">Best Dermatologists</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 m-b30">
                                <aside className="side-bar sticky-top p-0">
                                    <div className="widget wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                        <div className="dz-team style-7">
                                            <div className="dz-media">
                                                <img src={IMAGES.team1} alt="/" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-wrapper style-2 bg-secondary wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                        <FormBody />
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
export default TeamDeatail;
