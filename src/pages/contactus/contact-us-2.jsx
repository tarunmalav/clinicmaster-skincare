import { Link } from "react-router-dom";
import { IMAGES, SVGICON } from "../../constant/theme";
import Footer from "../../layout/footer";
import Header from "../../layout/Header";
import { appointmentmapdata, contactusdata } from "../../constant/alldata";
import ScrolltoTop from "../../component/scrolltotop";
import { useRef, useState } from "react";

function ContactUs2() {
    const [map, setMap] = useState(1)
    const form = useRef(); 
    const sendEmail = (e) => {
        e.preventDefault(); 
        emailjs.sendForm('service_61hny88', 'template_vvlidif', form.current, {publicKey: 'aYOgb_ORYkjD-hXhl',})
        .then((result) => {
            console.log('SUCCESS!', result.text);
        },(error) => {
            console.log('FAILED...', error.text);
        },
        );
    };
    return (
        <>
            <Header />
            <main className="page-content">
                <div className="dz-bnr-inr style-1 overlay-black-middle dz-bnr-inr-md dz-bnr-detail" style={{ backgroundImage: `url(${IMAGES.bnr1})` }}>
                    <div className="container">
                        <div className="dz-bnr-inr-entry">
                            <div className="row g-4 align-items-end">
                                <div className="col-xl-7 col-lg-6 pe-xl-5">
                                    <h1 className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Contact Us for Your dermatology Experience</h1>
                                    <div className="dz-media rounded-lg m-t20 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                        <img src={IMAGES.servicebnr1} alt="" />
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-6 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                                    <div className="form-wrapper style-2 bg-white">
                                        <div className="form-body">
                                            <div className="section-head style-1 mb-3">
                                                <h2 className="title fw-semibold m-b0">Get in Touch</h2>
                                                <p className="m-b0 text-body">You Can React Us Anytime</p>
                                            </div>
                                            <form ref={form} onSubmit={sendEmail} className="dzForm" method="POST">
                                                <input type="hidden" className="form-control" name="dzToDo" value="Contact" />
                                                <input type="hidden" className="form-control" name="reCaptchaEnable" value="0" />
                                                <div className="dzFormMsg"></div>
                                                <div className="row">
                                                    <div className="col-sm-12 m-b20">
                                                        <div className="floating-underline underline-1 input-icon-left">
                                                            <span className="input-group-text text-primary"><i className="feather icon-user" /></span>
                                                            <input name="dzName" type="text" className="form-control" placeholder="Your Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 m-b20">
                                                        <div className="floating-underline underline-1 input-icon-left">
                                                            <span className="input-group-text text-primary"><i className="feather icon-mail" /></span>
                                                            <input name="dzEmail" type="email" className="form-control" placeholder="Your Email Address" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 m-b20">
                                                        <div className="floating-underline underline-1 input-icon-left">
                                                            <span className="input-group-text text-primary"><i className="feather icon-phone" /></span>
                                                            <input name="dzPhoneNumber" type="number" className="form-control" placeholder="Phone Number" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 m-b20">
                                                        <div className="floating-underline underline-1">
                                                            <textarea name="dzMessage" className="form-control" rows="5" placeholder="Write Massage"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 m-t10">
                                                        <button type="submit" name="submit" value="submit" className="btn btn-lg btn-primary w-100">
                                                            Send Message
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="vertical-info left">
                        <ul className="social-list wow fadeInLeft" data-wow-delay="0.4s" data-wow-duration="0.8s">
                            <li><Link to="https://www.instagram.com/dexignzone/" target="_blank">Instagram</Link></li>
                            <li><Link to="https://www.facebook.com/dexignzone" target="_blank">Facebook</Link></li>
                            <li><Link to="https://x.com/dexignzone" target="_blank">twitter</Link></li>
                        </ul>
                    </div>
                    <div className="blur1"></div>
                    <div className="blur2"></div>
                    <div className="elip"><img src={IMAGES.herobanner2} alt="" /></div>
                    <div className="item1"> {SVGICON.star1} </div>
                    <div className="item2"> {SVGICON.star2} </div>
                    <div className="item3"> {SVGICON.star3} </div>
                    <div className="bg-half bg-light"></div>
                </div>
                <section className="content-inner-1 bg-light">
                    <div className="container">
                        <div className="row">
                            {contactusdata.map((data, i) => (
                                <div className="col-lg-3 col-sm-6 m-b30 wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.8s" key={i}>
                                    <div className={`icon-bx-wraper style-10 bg-white box-hover ${map === data.id ? 'active' : ''}`} onMouseEnter={() => setMap(data.id)}>
                                        <div className="icon-bx bg-secondary">
                                            <span className="icon-cell">
                                                {data.icon}
                                            </span>
                                        </div>
                                        <div className="icon-content">
                                            <h5 className="dz-title fw-semibold">{data.title}</h5>
                                            {data.para}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="clearfix bg-light">
                    <div className="container">
                        <div className="content-bx style-10 row g-0 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <div className="col-md-6">
                                <div className="dz-media">
                                    <img src={IMAGES.about8} alt="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h2 className="title">Want To Schedule An Appointment?</h2>
                                <Link to="/appointment" className="btn btn-lg btn-icon btn-primary btn-shadow">
                                    <span className="w-100">Appointment</span> <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="bg-light content-inner-2">
                    <div className="container">
                        <div className="map-wrapper style-4 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                            <iframe className="w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28891.193971348785!2d75.8546432!3d25.1559936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1719221707984!5m2!1sen!2sin" width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
                <section className="content-inner bg-light">
                    <div className="container">
                        <div className="section-head style-3 text-center wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <h2 className="title m-b10">All Locations</h2>
                        </div>
                        <div className="row">
                            {appointmentmapdata.map((data, i) => (
                                <div className="col-xl-3 col-md-6 m-b30 wow fadeInUp" data-wow-delay={data.dealy} data-wow-duration="0.8s" key={i}>
                                    <div className="dz-img-box style-4">
                                        <div className="dz-head">
                                            <h3 className="title m-b10"><img src={data.image1} alt="" /> {data.title}</h3>
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
export default ContactUs2;
