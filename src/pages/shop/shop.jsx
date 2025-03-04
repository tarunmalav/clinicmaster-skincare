import { Link } from "react-router-dom";
import PageBanner from "../../component/pagebanner";
import Footer from "../../layout/footer";
import Header from "../../layout/Header";
import { shopdata } from "../../constant/alldata";
import ScrolltoTop from "../../component/scrolltotop";


function Shop() {
    return (
        <>
            <Header />
            <main className="page-content">
                <PageBanner title={"Shop"} />
                <section className="content-inner bg-light">
                    <div className="container">
                        <div className="row m-b30 m-md-b0">
                            {shopdata.map((data, i) => (
                                <div className="col-xl-3 col-sm-6 m-b30 wow fadeInUp" data-wow-delay={data.dealy} data-wow-duration="0.8s" key={i}>
                                    <div className="shop-card">
                                        <div className="dz-media">
                                            <img src={data.image} alt="image" />
                                            <div className="shop-meta">
                                                <Link to={"#"} className="btn quick-view">
                                                    <i className="fa-solid fa-eye d-md-none d-block" />
                                                    <span className="d-md-block d-none">Quick View</span>
                                                </Link>
                                                <div className="btn meta-icon dz-wishicon">
                                                    <i className="icon feather icon-heart dz-heart" />
                                                    <i className="icon feather icon-heart-on dz-heart-fill" />
                                                </div>
                                                <div className="btn meta-icon dz-carticon">
                                                    <i className="feather icon-shopping-cart" />
                                                </div>
                                            </div>
                                            {i === 0 && (
                                                <div className="product-tag">
                                                    <span className="badge ">Get 20% Off</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="dz-content">
                                            <div className="inner-content">
                                                <h3 className="title"><Link to="/shop-details">{data.title}</Link></h3>
                                                <span className="price">$89.00 <del>$119.00</del></span>
                                            </div>
                                            <Link to="/shop-details" className="btn btn-square btn-lg btn-white btn-rounded shop-share-btn">
                                                <i className="feather icon-arrow-up-right" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <nav aria-label="Shop Page Navigation">
                            <ul className="pagination pagination-rounded-circle pagination-lg justify-content-center m-b30 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                <li className="page-item"><Link className="page-link" to={"#"}><i className="feather icon-arrow-left" /></Link></li>
                                <li className="page-item"><Link className="page-link active" to={"#"}>1</Link></li>
                                <li className="page-item"><Link className="page-link" to={"#"}>2</Link></li>
                                <li className="page-item"><Link className="page-link" to={"#"}>3</Link></li>
                                <li className="page-item"><Link className="page-link" to={"#"}><i className="feather icon-arrow-right" /></Link></li>
                            </ul>
                        </nav>
                    </div>
                </section>
            </main>
            <Footer />
            <ScrolltoTop />
        </>
    )
}
export default Shop;
