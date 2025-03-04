import { IMAGES, SVGICON } from "../constant/theme";
import { useState } from "react";
import Alert from 'react-bootstrap/Alert';
import FormBody from "./formbody";

function Bookappoinent() {
    const [show, setShow] = useState(true);
    return (
        <>
            <div className="map-wrapper">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28891.193971348785!2d75.8546432!3d25.1559936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1719221707984!5m2!1sen!2sin" width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className="container">
                    {show && (
                        <Alert dismissible className="content-bx style-5 alert alert-dismissible fade show m-b60 position-absolute bottom-0">
                            <div className="content-logo">
                                <img src={IMAGES.logo} alt="" />
                            </div>
                            <div className="content-text m-b20">
                                <h6 className="m-b5">Office Address:</h6>
                                <p className="m-b0">234 Oak Drive, Villagetown, USA</p>
                            </div>
                            <div className="content-text">
                                <h6 className="m-b5">Working Hours:</h6>
                                <p className="m-b0">Mon-Thu: 8:00am-5:00pm <br /> Fri: 8:00am-1:00pm</p>
                            </div>
                            <button onClick={() => setShow(false)} type="button" className="btn-close">
                                {SVGICON.crossicon}
                            </button>
                        </Alert>
                    )}
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-12 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                        <div className="item1">
                            <div className="form-wrapper style-2 bg-secondary">
                                <FormBody />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Bookappoinent;