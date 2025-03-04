import { Link } from "react-router-dom";
import { IMAGES, SVGICON } from "../constant/theme";

function PageBanner({ title }) {
    return (
        <>
            <div className="dz-bnr-inr style-1 overlay-black-middle dz-bnr-inr-md" style={{ backgroundImage: `url(${IMAGES.bnr1})` }}>
                <div className="container">
                    <div className="dz-bnr-inr-entry d-table-cell">
                        <h1 className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">{title}</h1>
                        <nav aria-label="breadcrumb" className="breadcrumb-row wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item">{title}</li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="vertical-info left">
                    <ul className="social-list wow fadeInLeft" data-wow-delay="0.4s" data-wow-duration="0.8s">
                        <li><Link to="https://www.instagram.com" target="_blank">Instagram</Link></li>
                        <li><Link to="https://www.facebook.com" target="_blank">Facebook</Link></li>
                        <li><Link to="https://twitter.com" target="_blank">twitter</Link></li>
                    </ul>
                </div>
                <div className="blur1"></div>
                <div className="blur2"></div>
                <div className="elip"><img src={IMAGES.herobanner2} alt="" /></div>
                <div className="item1">
                    {SVGICON.star1}
                </div>
                <div className="item2">
                    {SVGICON.star2}
                </div>
                <div className="item3">
                    {SVGICON.star3}
                </div>
            </div>
        </>
    )
}
export default PageBanner;