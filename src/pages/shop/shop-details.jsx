import { Link } from "react-router-dom";
import { IMAGES } from "../../constant/theme";
import Footer from "../../layout/footer";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useRef, useState } from "react";
import { filterdata2 } from "../../constant/alldata";
import MainHeader from "../../layout/mainheader";
import ScrolltoTop from "../../component/scrolltotop";
import StarRating from "../../component/starrating";
import emailjs from '@emailjs/browser'; 

function ShopDetails() {
    const [count, setCount] = useState(1);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
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
            <MainHeader />
            <main className="page-content">
                <section className="content-inner bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-5 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                <div className="dz-product-detail sticky-top">
                                    <div className="dz-media">
                                        <img src={IMAGES.shoplarge1} alt="image" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-7 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                <div className="dz-product-detail style-1 p-t15">
                                    <div className="dz-content">
                                        <div className="dz-content-footer">
                                            <div className="dz-content-start">
                                                <span className="badge bg-primary mb-2">SALE 20% Off</span>
                                                <h1 className="title">Green Beauty</h1>
                                                <div className="review-num">
                                                    <ul className="dz-rating">
                                                        <li className="star-fill"><i className="fa fa-star" /></li>
                                                        <li className="star-fill"><i className="fa fa-star" /></li>
                                                        <li className="star-fill"><i className="fa fa-star" /></li>
                                                        <li><i className="fa fa-star" /></li>
                                                        <li><i className="fa fa-star " /></li>
                                                    </ul>
                                                    <span>4.7 Rating</span>
                                                    <Link to={"#"}>(5 customer reviews)</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <div className="meta-content m-b30 d-flex align-items-end">
                                            <div className="me-3">
                                               <span className="price">$89.00 <del>$119.00</del></span>
                                            </div>
                                        </div>
                                        <div className="product-num">
                                            <div className="btn-quantity style-2">
                                                <div className="input-group bootstrap-touchspin">
                                                    <span className="input-group-addon bootstrap-touchspin-prefix d-none"> </span>
                                                    <input type="text" value={count} className="quantity-input form-control d-block" />
                                                    <span className="input-group-addon bootstrap-touchspin-postfix d-none"></span>
                                                    <span className="input-group-btn-vertical">
                                                        <button onClick={increment} className="btn btn-default bootstrap-touchspin-up" type="button">
                                                            <i className="fa-solid fa-plus" />
                                                        </button>
                                                        <button onClick={decrement} className="btn btn-default bootstrap-touchspin-down" type="button">
                                                            <i className="fa-solid fa-minus" />
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="clearfix">
                                                <Link to={"#"} className="btn btn-primary">Add To Cart</Link>
                                            </div>
                                        </div>
                                        <div className="cart-btn">
                                            <Link to={"#"} className="btn btn-secondary btn-icon">
                                                <i className="feather icon-heart m-r5" /> Add To Wishlist
                                            </Link>
                                        </div>
                                        <div className="dz-info">
                                            <ul>
                                                <li><strong>Category:</strong></li>
                                                <li><Link to={"#"}>Dresses,</Link></li>
                                                <li><Link to={"#"}>Jeans,</Link></li>
                                                <li><Link to={"#"}>Swimwear,</Link></li>
                                                <li><Link to={"#"}>Summer,</Link></li>
                                                <li><Link to={"#"}>Clothing,</Link></li>
                                            </ul>
                                            <ul>
                                                <li><strong>Tags:</strong></li>
                                                <li><Link to={"#"}>Casual,</Link></li>
                                                <li><Link to={"#"}>Athletic,</Link></li>
                                                <li><Link to={"#"}>Workwear,</Link></li>
                                                <li><Link to={"#"}>Accessories,</Link></li>
                                            </ul>
                                            <ul className="social-icon">
                                                <li><strong>Share:</strong></li>
                                                <li>
                                                    <Link to="https://www.facebook.com/dexignzone" target="_blank">
                                                        <i className="fa-brands fa-facebook-f" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="https://www.linkedin.com/showcase/dexignzone/" target="_blank">
                                                        <i className="fa-brands fa-linkedin-in" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="https://www.instagram.com/dexignzone/" target="_blank">
                                                        <i className="fa-brands fa-instagram" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="https://x.com/dexignzone" target="_blank">
                                                        <i className="fa-brands fa-twitter" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="clearfix bg-light">
                    <div className="container">
                        <div className="product-description">
                            <div className="dz-tabs">
                                <Tabs defaultActiveKey="Description" className="nav nav-tabs center">
                                    <Tab eventKey="Description" title="Description">
                                        <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" >
                                            <div className="detail-bx text-center">
                                                <h3 className="title m-b15">About Green Beauty Cream</h3>
                                                <p className="para-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                            </div>
                                            <div className="row g-lg-4 g-3">
                                                <div className="col-xl-4 col-md-4 col-sm-4 col-6">
                                                    <div className="related-img dz-media">
                                                        <img src={IMAGES.shopmiddle1} alt="/" />
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-md-4 col-sm-4 col-6">
                                                    <div className="related-img dz-media">
                                                        <img src={IMAGES.shopmiddle2} alt="/" />
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-md-4 col-sm-4">
                                                    <div className="related-img dz-media">
                                                        <img src={IMAGES.shopmiddle3} alt="/" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="Reviews (12)" title="Reviews (12)">
                                        <div className="tab-pane fade show active" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" >
                                            <div className="clear" id="comment-list">
                                                <div className="post-comments comments-area style-1 clearfix">
                                                    <h4 className="comments-title mb-2">Comments (02)</h4>
                                                    <p className="dz-title-text">There are many variations of passages of Lorem Ipsum available.</p>
                                                    <div id="comment">
                                                        <ol className="comment-list">
                                                            <li className="comment even thread-even depth-1 comment" id="comment-2">
                                                                <div className="comment-body">
                                                                    <div className="comment-author vcard">
                                                                        <img src={IMAGES.avtarmiddle1jpg} alt="/" className="avatar" />
                                                                        <cite className="fn">Michel Poe</cite>
                                                                    </div>
                                                                    <div className="comment-content dz-page-text">
                                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                                    </div>
                                                                    <div className="reply">
                                                                        <Link rel="nofollow" className="comment-reply-link" to={"#"}>Reply</Link>
                                                                    </div>
                                                                </div>
                                                                <ol className="children">
                                                                    <li className="comment byuser comment-author-w3itexpertsuser bypostauthor odd alt depth-2 comment" id="comment-3">
                                                                        <div className="comment-body" id="div-comment-3">
                                                                            <div className="comment-author vcard">
                                                                                <img src={IMAGES.avtarmiddle1} alt="/" className="avatar" />
                                                                                <cite className="fn">Celesto Anderson</cite>
                                                                            </div>
                                                                            <div className="comment-content dz-page-text">
                                                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                                            </div>
                                                                            <div className="reply">
                                                                                <Link className="comment-reply-link" to={"#"}> Reply</Link>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ol>
                                                            </li>
                                                            <li className="comment even thread-odd thread-alt depth-1 comment" id="comment-4">
                                                                <div className="comment-body" id="div-comment-4">
                                                                    <div className="comment-author vcard">
                                                                        <img src={IMAGES.avtarmiddle2jpg} alt="/" className="avatar" />
                                                                        <cite className="fn">Monsur Rahman Lito</cite>
                                                                    </div>
                                                                    <div className="comment-content dz-page-text">
                                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                                    </div>
                                                                    <div className="reply">
                                                                        <Link className="comment-reply-link" to={"#"}> Reply</Link>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ol>
                                                    </div>
                                                    <div className="default-form comment-respond style-1" id="respond">
                                                        <h4 className="comment-reply-title mb-2" id="reply-title">Good Comments</h4>
                                                        <p className="dz-title-text">There are many variations of passages of Lorem Ipsum available.</p>
                                                        <div className="comment-form-rating d-flex">
                                                            <label className="pull-left m-r10 m-b20  text-secondary">Your Rating</label>
                                                            <div className="rating-widget">
                                                                <div className="rating-stars">
                                                                    <StarRating />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="clearfix">
                                                            <form ref={form} onSubmit={sendEmail} method="post" id="comments_form" className="comment-form" noValidate>
                                                                <p className="comment-form-author">
                                                                    <input id="name" placeholder="Author" name="author" type="text" />
                                                                </p>
                                                                <p className="comment-form-email">
                                                                    <input id="email" required="required" placeholder="Email" name="email" type="email" />
                                                                </p>
                                                                <p className="comment-form-comment">
                                                                    <textarea id="comments" placeholder="Type Comment Here" className="form-control4" name="comment" cols="45" rows="3" required="required"></textarea>
                                                                </p>
                                                                <p className="col-md-12 col-sm-12 col-xs-12 form-submit">
                                                                    <button id="submit" type="submit" className="submit btn btn-secondary btnhover3 filled">Submit Now</button>
                                                                </p>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-inner bg-light overflow-hidden">
                    <div className="container">
                        <div className="m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <h2 className="title">Related products</h2>
                        </div>
                        <div className="row">
                            {filterdata2.map((data, i) => (
                                <div className="col-xl-3 col-lg-4 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s" key={i}>
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
                    </div>
                </section>
            </main>
            <Footer />
            <ScrolltoTop />
        </>
    )
}
export default ShopDetails;
