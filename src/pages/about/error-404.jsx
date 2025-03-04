import { Link } from "react-router-dom";
import PageBanner from "../../component/pagebanner";
import { IMAGES, SVGICON } from "../../constant/theme";
import Footer from "../../layout/footer";
import Header from "../../layout/Header";

function Error() {
    return (
        <>
            <Header />
            <main className="page-content">
                <PageBanner title={"Error 404"} />
                <section className="error-page style-1 content-inner-1 bg-light overflow-hidden">
                    <div className="container">
                        <div className="row align-items-center g-5 justify-content-center">
                            <div className="col-lg-6 col-md-9 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                <div className="dz-error-media">
                                    <img src={IMAGES.error1} alt="" />
                                    <div className="item1">
                                        <img src={IMAGES.error2} alt="" />
                                        {SVGICON.question}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                <div className="inner-content text-center">
                                    <h2 className="dz-error data-name-primary" data-name="404">404</h2>
                                    <p className="text">We are sorry. But the page you are looking for cannot be found.</p>
                                    <Link to="/" className="btn btn-lg btn-primary btn-hover1">Back To Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
export default Error;
