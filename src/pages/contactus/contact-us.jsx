import PageBanner from "../../component/pagebanner";
import { IMAGES } from "../../constant/theme";
import Footer from "../../layout/footer";
import Header from "../../layout/Header";
import ScrolltoTop from "../../component/scrolltotop";
import { useRef, useState } from "react";
import { contactusdata } from "../../constant/alldata";
import emailjs from '@emailjs/browser';


function ContactUs() {
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
                <PageBanner title={"Contact Us"} />
                <section className="content-inner bg-light">
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
                <div className="map-wrapper height-sm wow fadeIn" data-wow-delay="0.2s" data-wow-duration="0.8s">
                    <iframe className="w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28891.193971348785!2d75.8546432!3d25.1559936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1719221707984!5m2!1sen!2sin" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <section className="content-inner content-wrapper style-24 bg-light overflow-hidden">
                    <div className="container">
                        <div className="row align-items-end justify-content-center">
                            <div className="col-xl-5 col-lg-6 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                <div className="content-info">
                                    <div className="form-wrapper style-2 bg-white">
                                        <div className="form-body">
                                            <div className="section-head style-1 mb-3">
                                                <h2 className="title fw-semibold m-b0">Get in Touch</h2>
                                                <p className="m-b0">You Can React Us Anytime</p>
                                            </div>
                                            <form ref={form} onSubmit={sendEmail} className="dzForm" method="POST">
                                                <input type="hidden" className="form-control" name="dzToDo" value="Contact" />
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
                                                    <div className="col-sm-12 m-b20">
                                                        <div className="input-recaptcha">
                                                            <div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                                                            <input className="form-control d-none" data-recaptcha="true" required data-error="Please complete the Captcha" />
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
                            <div className="col-xl-7 col-lg-6 pe-xl-5 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                <div className="content-media">
                                    <div className="dz-media">
                                        <img src={IMAGES.about9} alt="" />
                                    </div>
                                </div>
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
export default ContactUs;
