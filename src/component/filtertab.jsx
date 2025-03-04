import { useState } from "react";
import { Link } from "react-router-dom";
import { filterdata1, filterdata2 } from "../constant/alldata";

function Filtertab() {

    const [active, setActive] = useState(1);
    const handleclick = (active) => {
        setActive(active)
    }
    const [category, setCategory] = useState(filterdata2);
    const handleBtns = (type) => {
        if (type.title.includes('Skin & Face')) {
            setCategory(
                filterdata2
            )
        }
        else {
            setCategory(
                filterdata2.filter((el) => el.kind.includes(type.title))
            )
        }
    }
    return (
        <>
            <div className="site-filters clearfix style-1 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                <ul className="filters justify-content-center" data-bs-toggle="buttons">
                    {filterdata1.map((data, i) => (
                        <li className={`${active === data.id ? 'active' : ''}`} onClick={() => handleBtns(data)} key={i}>
                            <Link onClick={() => handleclick(data.id)} className='btn' value={data.title} >{data.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="clearfix">
                <ul id="masonry" className="row">
                    {category.map((data, i) => (
                        <li key={data.id} className="card-container col-xl-3 col-lg-4 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <div className="shop-card">
                                <div className="dz-media">
                                    <img src={data.image} alt="image" />
                                    <div className="shop-meta">
                                        <Link to={"#"} className="btn quick-view" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
                                            <span className="badge">Get 20% Off</span>
                                        </div>
                                    )}

                                </div>
                                <div className="dz-content">
                                    <div className="inner-content">
                                        <h3 className="title"> <Link to="shop-details">{data.title}</Link> </h3>
                                        <span className="price">$89.00 <del>$119.00</del></span>
                                    </div>
                                    <Link to="shop-details" className="btn btn-square btn-lg btn-white btn-rounded shop-share-btn"> <i className="feather icon-arrow-up-right" /> </Link>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default Filtertab;