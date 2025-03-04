import { Link } from "react-router-dom";
import { IMAGES, SVGICON } from "../../constant/theme";
import Footer from "../../layout/footer";
import SkinCard1 from "../../component/skincard1";
import { marqueelist1, marqueelist2 } from "../../constant/alldata";
import AfterTreatment from "../../component/aftertreatment";
import ChoosePlan from "../../component/chooseplan";
import BestDentist from "../../component/bestdentist";
import WhyChoose from "../../component/whychoose";
import TestimoniulSwiper from "../../component/testimoniulswiper";
import VerticalSwiper from "../../component/verticalswiper";
import ClientLogo from "../../component/clientlogo";
import Bookappoinent from "../../component/bookappointment";
import Frequently from "../../component/frequently";
import Filtertab from "../../component/filtertab";
import FlexSwiper from "../../component/flexswiper";
import Teams from "../../component/teams";
import ModalVideo from 'react-modal-video';
import { useState } from "react";
import RotateBoxModal from "../../component/rotateboxmodal";
import MainHeader from "../../layout/mainheader";
import ScrolltoTop from "../../component/scrolltotop";

function Index() {
	const [isOpen, setOpen] = useState(false);
	return (
		<>
			<MainHeader transparent='header-transparent' />
			<main className="page-content">
				<div className="hero-banner style-3">
					<div className="container">
						<div className="inner-wrapper">
							<div className="row align-items-center h-100">
								<div className="col-md-6">
									<div className="hero-content">
										<h1 className="title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Skincare is Like A Workout For Your Skin</h1>
										<div className="content-bx style-2 secondary m-b40 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
											Experienced staff is dedicated to improving our patients’ dental health and enhancing
										</div>
										<div className="d-flex">
											<Link to="/appointment" className="btn btn-lg btn-icon btn-primary wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
												Appointment
												<span className="right-icon"><i className="feather icon-arrow-right" /></span>
											</Link>
											<div className="avatar-group m-l50 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
												<img className="avatar avatar-lg rounded-circle" src={IMAGES.smallavatar1} alt="" />
												<img className="avatar avatar-lg rounded-circle" src={IMAGES.smallavatar2} alt="" />
												<img className="avatar avatar-lg rounded-circle" src={IMAGES.smallavatar3} alt="" />
												<img className="avatar avatar-lg rounded-circle" src={IMAGES.smallavatar4} alt="" />
												<Link to="/about-us" className="avatar btn btn-square btn-lg btn-white btn-shadow btn-rounded">
													{SVGICON.arrowup}
												</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-6 align-self-end wow fadeInRight" data-wow-delay="0.8s" data-wow-duration="0.8s">
									<div className="hero-thumbnail" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
										<img className="thumbnail" src={IMAGES.herobanner} alt="" />
										<div className="item5" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
											<Link onClick={() => setOpen(true)} className="popup-youtube" to="#">
												<RotateBoxModal />
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="item1">
								<div className="widget-rating1">
									<ul className="star-list">
										<li><i className="fa fa-star" /></li>
										<li><i className="fa fa-star" /></li>
										<li><i className="fa fa-star" /></li>
										<li><i className="fa fa-star" /></li>
										<li><i className="fa fa-star" /></li>
									</ul>
									<span className="rating text-primary m-r5">(4.8)</span>
									<span className="text">12k+ ratings on google</span>
								</div>
							</div>
							<div className="item2 move-3" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
								<div className="dz-media2">
									<img src={IMAGES.herobanner2} alt="" />
								</div>
							</div>
							<div className="item3 move-3" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
								<img src={IMAGES.herobanner3} alt="" />
							</div>
							<div className="item4" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
								<img src={IMAGES.herobanner4} alt="" />
							</div>
							{SVGICON.shape1}
							{SVGICON.shape2}
						</div>
					</div>
					<div className="vertical-info left">
						<ul className="social-list">
							<li><Link to="https://www.instagram.com/">Instagram</Link></li>
							<li><Link to="https://www.facebook.com/">Facebook</Link></li>
							<li><Link to="https://twitter.com/">twitter</Link></li>
						</ul>
						<Link to={"#"} className="btn btn-white btn-sm px-2 py-3 btn-shadow rounded">LET’S TALK</Link>
					</div>
					<div className="banner-shape4"></div>
					<div className="banner-shape5"></div>
					<div className="banner-shape6"></div>
				</div>
				<section className="content-inner bg-light">
					<div className="container">
						<div className="row content-wrapper style-13">
							<SkinCard1 />
						</div>
					</div>
				</section>
				<div className="dz-marquee style-1 bg-secondary overflow-hidden">
					<ul className="marquee-list">
						{marqueelist1.map((data, i) => (
							<li key={i} className="item wow bounceIn" data-wow-delay={data.delay} data-wow-duration="0.8s"> {data.title} </li>
						))}
					</ul>
				</div>
				<section className="content-inner-2 bg-light">
					<div className="container">
						<div className="section-head style-3 m-b30 text-center wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
							<h2 className="title"> Transform Your Skin with Our <br /> Advanced Dermatology Treatments </h2>
							<p className="mw-100"> Experience a transformative journey that sculpts your physique and unlocks your full potential. </p>
						</div>
						<FlexSwiper />
						<div className="dz-separator style-3">
							<Link to="/services" className="btn separator-badge fw-medium">View All Services</Link>
						</div>
					</div>
				</section>
				<section className="content-inner bg-light bg-bottom-half-white">
					<div className="container">
						<div className="section-head style-3 text-center m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
							<h2 className="title m-b0"> After Treatment </h2>
						</div>
						<AfterTreatment />
					</div>
				</section>
				<section className="content-inner bg-light">
					<div className="container">
						<div className="section-head style-3 m-b30 text-center wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
							<h2 className="title"> Our Featured <br /> Beauty Treatments </h2>
							<p> Experience a transformation! We offer the perfect blend of pampering treatments and powerful derma products to address your specific needs and unlock your most radiant skin. </p>
						</div>
						<Filtertab />
					</div>
				</section>
				<section className="content-inner">
					<div className="container">
						<div className="row content-wrapper style-5 align-items-center">
							<Frequently />
						</div>
					</div>
				</section>
				<section className="content-inner bg-light gradient-bottom-light">
					<div className="container">
						<div className="section-head style-3 text-center wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
							<h2 className="title m-b10"> We Employ only Specialists </h2>
							<p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
						</div>
						<div className="row">
							<Teams />
						</div>
					</div>
				</section>
				<section className="content-inner bg-light">
					<div className="container">
						<div className="row align-items-center pricingtable-content-wrapper">
							<ChoosePlan />
						</div>
					</div>
				</section>
				<div className="dz-marquee style-2 bg-light">
					<ul className="marquee-list">
						{marqueelist2.map((data, i) => (
							<li key={i} className={`item wow bounceIn ${data.columnstand}`} data-wow-delay={data.delay} data-wow-duration="0.8s"> {data.title} </li>
						))}
					</ul>
				</div>
				<section className="content-inner-3 bg-light pb-0 overflow-hidden">
					<div className="container">
						<div className="row content-wrapper style-17 align-items-end justify-content-center">
							<BestDentist />
						</div>
					</div>
				</section>
				<section className="content-inner">
					<div className="container">
						<div className="row content-wrapper style-14 align-items-center">
							<WhyChoose />
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
				<section className="content-inner bg-light">
					<div className="container">
						<div className="section-head style-1 m-b30 row align-items-end">
							<div className="col-md-7 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
								<h2 className="title m-b0"> Stay Informed with <br /> Our Latest Health Blogs </h2>
							</div>
							<div className="col-md-5 text-sm-end d-md-block d-none wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
								<Link to="/blog-grid" className="btn btn-icon btn-primary btn-shadow"> View All
									<span className="right-icon"><i className="feather icon-arrow-right" /></span>
								</Link>
							</div>
						</div>
						<div className="row content-wrapper style-15">
							<VerticalSwiper />
						</div>
					</div>
				</section>
				<section className="content-wrapper style-18 bg-light">
					<Bookappoinent />
				</section>
				<div className="content-inner-4">
					<div className="container">
						<ClientLogo />
					</div>
				</div>
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
export default Index;	