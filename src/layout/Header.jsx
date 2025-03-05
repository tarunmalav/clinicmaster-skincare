import { Link } from "react-router-dom";
import { IMAGES } from "../constant/theme";
import React, { useEffect, useRef, useState } from "react";
import { menudata } from "../constant/alldata";
import emailjs from '@emailjs/browser'; 
import ShopSidebar from "../component/shopsidebar";

function Header() { 
    const [show, setShow] = useState(null);
    const [isActive, setIsActive] = useState(null);
    const [scroll, setScroll] = useState(false);
    // toggle show 
    const handleclick = (index) => {
        setShow(index)
        console.log(index)
    }; 
    function menuHandler(index) {
        if (isActive == index) {
            setIsActive(null)
        }
        else {
            setIsActive(index)
        }
    } 
    // is-fixed 
    function scrollHandler() {
        if (window.scrollY >= 90) {
            setScroll(true)
        }
        else {
            setScroll(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)
        return () => {
            window.removeEventListener('scroll', scrollHandler)
        }
    }, [])
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
            <header className="site-header header header-transparent style-2 header-light header-toggle">
                <div className={`sticky-header main-bar-wraper ${scroll ? 'is-fixed' : ''}`}>
                    <div className="main-bar clearfix">
                        <div className="container-fluid clearfix inner-bar">
                            <div className="extra-nav-left">
                                <button onClick={() => handleclick(1)} type="button" className="toggler1" data-bs-toggle="offcanvas" data-bs-target="#headerSidebar" aria-controls="offcanvasLeft">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                            <div className="logo-header logo-light">
                                <Link to="/"><img src={IMAGES.logowhite} alt="logo" /></Link>
                            </div>
                            <div className="logo-header logo-dark">
                                <Link to="/"><img src={IMAGES.logo} alt="logo" /></Link>
                            </div>
                            <button onClick={() => handleclick(3)} className={`w3menu-toggler navicon ${show ? 'open' : ''}`} type="button" data-target="#W3Menu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <div onClick={() => setShow(false)} className="menu-close fade-overlay"></div>
                            <div className={show == 3 ? 'header-nav w3menu w3menu-start mo-left show' : 'header-nav w3menu w3menu-start mo-left'} id="W3Menu">
                                <div className="logo-header logo-dark">
                                    <Link to="/"><img src={IMAGES.logo} alt="" /></Link>
                                </div>
                                <ul className="nav navbar-nav">
                                    {menudata.map((data, i) => (
                                        <React.Fragment key={data.id || i}>
                                            {data.classChange && data.classChange.includes('has-mega-menu') ? (
                                                <li className={`has-mega-menu sub-menu-down auto-width menu-left ${i === isActive ? 'open' : ''}`}>
                                                    <Link onClick={() => menuHandler(i)} to={"#"}>
                                                        <span>{data.title}</span>
                                                        <i className="fas fa-chevron-down tabIndex" />
                                                    </Link>
                                                    <div className="mega-menu">
                                                        <ul className="demo-menu">
                                                            {data.content.map((item, index) => (
                                                                <li key={item.id || index}>
                                                                    <Link to={item.to}>
                                                                        <img src={item.image} alt={item.title} />
                                                                        <span className="menu-title">{item.title}</span>
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </li>
                                            ) : (
                                                <li className={`sub-menu-down ${i === isActive ? 'open' : ''}`}>
                                                    <Link onClick={() => menuHandler(i)} to={"#"}>
                                                        <span>{data.title}</span>
                                                        <i className="fas fa-chevron-down tabIndex" />
                                                    </Link>
                                                    <ul className="sub-menu">
                                                        {data.content.map((item, index) => (
                                                            <li key={item.id || index}>
                                                                <Link to={item.to}>{item.title}</Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </ul>
                                <div className="dz-social-icon">
                                    <ul>
                                        <li> <Link to="https://www.linkedin.com" target="_blank"> <i className="fa-brands fa-linkedin" /> </Link> </li>
                                        <li> <Link to="https://www.instagram.com" target="_blank"> <i className="fa-brands fa-instagram" /> </Link> </li>
                                        <li> <Link to="https://www.facebook.com" target="_blank"> <i className="fa-brands fa-facebook-f" /> </Link> </li>
                                        <li> <Link to="https://twitter.com" target="_blank"> <i className="fa-brands fa-x-twitter" /> </Link> </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={`extra-nav ${scroll ? 'active' : ''}`}>
                                <div className="extra-cell">
                                    <ul className="header-right">
                                        <li onClick={() => handleclick(2)} className="nav-item">
                                            <Link to={"#"} className="nav-link cart-btn" data-bs-toggle="offcanvas" data-bs-target="#sidebarCart" aria-controls="sidebarCart">
                                                <i className="feather icon-shopping-cart" />
                                                <span className="badge badge-circle">5</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item item-call">
                                            <div className="info-widget style-5">
                                                <div className="widget-media">
                                                    <i className="feather icon-phone-call dz-ring-effect" />
                                                </div>
                                                <div className="widget-content">
                                                    <h6 className="title text-primary">Contact us?</h6>
                                                    <Link to="tel:+11234567890" className="text-secondary">+1 123 456 7890</Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="nav-item item-btn">
                                            <Link to="/appointment" className="btn btn-primary btn-hover1"> Appointment </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`offcanvas dz-offcanvas offcanvas offcanvas-end ${show == 1 ? 'show' : ''}`} tabIndex="-1" id="headerSidebar">
                    <button onClick={() => setShow(false)} type="button" className="btn-close m-t10 m-l10" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    <div className="offcanvas-body">
                        <div className="widget">
                            <div className="sidebar-header m-b20">
                                <Link to="/"><img src={IMAGES.logo} alt="/" /></Link>
                            </div>
                            <p>ClinicMaster is a modern and responsive Bootstrap HTML template designed for health and medical websites. Ideal for clinics, hospitals, and healthcare professionals seeking a professional online presence with an elegant and user-friendly design.</p>
                        </div>
                        <div className="widget">
                            <div className="widget-title">
                                <h4 className="title">Contact Us</h4>
                            </div>
                            <ul className="list-check">
                                <li>785 15h Street, Office 478 Berlin, De 81566</li>
                                <li><Link to="mailto:email@domain.com" className="text-body">email@domain.com</Link></li>
                                <li><Link to="tel:+11234567890" className="text-body">+1 123 456 7890</Link></li>
                            </ul>
                        </div>
                        <div className="widget">
                            <div className="widget-title">
                                <h4 className="title">Newsletter</h4>
                            </div>
                            <form className="dzSubscribe style-2" ref={form} onSubmit={sendEmail} method="post">
                                <div className="dzSubscribeMsg"></div>
                                <div className="form-group">
                                    <div className="input-group mb-0">
                                        <input name="dzEmail" required="required" type="email" className="form-control" placeholder="Your Email Address" />
                                        <div className="input-group-addon">
                                            <button name="submit" value="Submit" type="submit" className="btn text-primary btn-transparent p-2">
                                                <i className="fa-solid fa-paper-plane" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="widget">
                            <div className="widget-title">
                                <h4 className="title">Follow Us</h4>
                            </div>
                            <div className="dz-social-icon style-1">
                                <ul>
                                    <li> <Link to="https://www.linkedin.com" target="_blank"> <i className="fa-brands fa-linkedin" /> </Link> </li>
                                    <li> <Link to="https://www.instagram.com" target="_blank"> <i className="fa-brands fa-instagram" /> </Link> </li>
                                    <li> <Link to="https://www.facebook.com" target="_blank"> <i className="fa-brands fa-facebook-f" /> </Link> </li>
                                    <li> <Link to="https://twitter.com" target="_blank"> <i className="fa-brands fa-x-twitter" /> </Link> </li>
                                    <li> <Link to="https://www.youtube.com" target="_blank"> <i className="fa-brands fa-youtube" /> </Link> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`offcanvas dz-offcanvas offcanvas offcanvas-end ${show == 2 ? 'show' : ''}`} tabIndex="-1" id="sidebarCart">
                    <button onClick={() => setShow(false)} type="button" className="btn-close m-t10 m-l10" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    <div className="offcanvas-body">
                        <ShopSidebar/>
                    </div>
                </div>
            </header >
        </>
    );
}
export default Header;