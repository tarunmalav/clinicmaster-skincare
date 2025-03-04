import { Link } from "react-router-dom";
import PageBanner from "../../component/pagebanner";
import TestimoniulSwiper from "../../component/testimoniulswiper";
import { IMAGES } from "../../constant/theme";
import Footer from "../../layout/footer";
import Header from "../../layout/Header";
import { testimonialdata2, testimonialdata3 } from "../../constant/alldata";
import ModalVideo from "react-modal-video";
import { useState } from "react";
import ScrolltoTop from "../../component/scrolltotop";

function Testimonial() {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <Header />
            <main className="page-content">
                <PageBanner title={"Testimonial"} />
                <section className="content-inner-2">
                    <div className="container">
                        <div className="row m-b20 loadmore-content">
                            {testimonialdata2.map((data, i) => (
                                <div key={i} className="col-lg-6 m-b20 wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.8s">
                                    <div className="testimonial-6">
                                        <div className="testimonial-info">
                                            <div className="testimonial-text">
                                                <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a making it look like readable English. </p>
                                            </div>
                                        </div>
                                        <div className="testimonial-detail">
                                            <h5 className="testimonial-name"> Kenneth Fong </h5>
                                            <span className="testimonial-position">Postgraduate Student</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="dz-separator style-3">
                            <Link to={"#"} className="btn separator-badge dz-load-more" rel="ajax/testimonial">Load  More</Link>
                        </div>
                    </div>
                </section>
                <section className="content-inner">
                    <div className="container">
                        <div className="section-head style-1 text-center m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <h2 className="title m-b0"> Video Testimonials. </h2>
                        </div>
                        <div className="row">
                            {testimonialdata3.map((data, i) => (
                                <div key={i} className="col-xl-4 col-md-6 m-b20 wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.8s">
                                    <div className="testimonial-5">
                                        <div className="testimonial-media">
                                            <img src={data.image} alt="" />
                                            <Link onClick={() => setOpen(true)} to="#" className="video-btn popup-youtube">
                                                <i className="fa fa-play" />
                                            </Link>
                                        </div>
                                        <div className="testimonial-detail">
                                            <div className="dz-media">
                                                <img src={data.image2} alt="" />
                                            </div>
                                            <div className="clearfix">
                                                <h5 className="testimonial-name"> Kenneth Fong </h5>
                                                <span className="testimonial-position">Postgraduate Student</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
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
            <ModalVideo
                channel='youtube'
                allowFullScreen
                isOpen={isOpen}
                videoId='o8OgzQdA70c'
                onClose={() => setOpen(false)}
            />
        </>
    )
}
export default Testimonial;
