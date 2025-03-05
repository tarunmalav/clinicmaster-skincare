import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "../pages/home";
import AboutUs from "../pages/about/about-us";
import AboutUs2 from "../pages/about/about-us-2";
import Appointment from "../pages/about/appointment";
import PricingTable from "../pages/about/pricing-table";
import Testimonial from "../pages/about/testimonial";
import Faqs from "../pages/about/faqs";
import Error from "../pages/about/error-404";
import Team from "../pages/team/team";
import TeamDeatail from "../pages/team/team-detail";
import Services from "../pages/service/services";
import ServiceDetail from "../pages/service/service-detail";
import ServiceDetail2 from "../pages/service/service-detail-2";
import Shop from "../pages/shop/shop";
import ShopDetails from "../pages/shop/shop-details";
import BlogGrid from "../pages/blog/blog-grid";
import BlogListSidebar from "../pages/blog/blog-list-sidebar";
import BlogDetails from "../pages/blog/blog-details";
import ContactUs from "../pages/contactus/contact-us";
import ContactUs2 from "../pages/contactus/contact-us-2";
import Scroll from "../component/scroll";

function Root() {
    return (
        <>
            <div className="page-wraper">

                <BrowserRouter>
                    <Routes>
                        <Scroll/>
                        <Route path="/" exact element={<Index />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="/about-us-2" element={<AboutUs2 />} />
                        <Route path="/appointment" element={<Appointment />} />
                        <Route path="/pricing-table" element={<PricingTable />} />
                        <Route path="/testimonial" element={<Testimonial />} />
                        <Route path="/faqs" element={<Faqs />} />
                        <Route path="/error-404" element={<Error />} />
                        <Route path="/team" element={<Team />} />
                        <Route path="/team-detail" element={<TeamDeatail />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/service-detail" element={<ServiceDetail />} />
                        <Route path="/service-detail-2" element={<ServiceDetail2 />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/shop-details" element={<ShopDetails />} />
                        <Route path="/blog-grid" element={<BlogGrid />} />
                        <Route path="/blog-list-sidebar" element={<BlogListSidebar />} />
                        <Route path="/blog-details" element={<BlogDetails />} />
                        <Route path="/contact-us" element={<ContactUs />} />
                        <Route path="/contact-us-2" element={<ContactUs2 />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </BrowserRouter>
            </div>

        </>
    )
}
export default Root;    