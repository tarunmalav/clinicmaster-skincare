import { IMAGES } from "../constant/theme";
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

const FIRST_IMAGE1 = {
    imageUrl: IMAGES.beforecompare1,
};
const SECOND_IMAGE1 = {
    imageUrl: IMAGES.aftercompare1,
};
const FIRST_IMAGE2 = {
    imageUrl: IMAGES.beforecompare2,
};
const SECOND_IMAGE2 = {
    imageUrl: IMAGES.aftercompare2,
};

function AfterTreatment() {
    return (
        <>
            <div className="row m-b30">
                <div className="col-md-6 m-b15 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                    <div className="twentytwenty-box twentytwenty-sm shadow">
                        <div className="twentytwenty-container">
                            <ReactBeforeSliderComponent
                                firstImage={FIRST_IMAGE1}
                                secondImage={SECOND_IMAGE1}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 m-b15 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                    <div className="twentytwenty-box twentytwenty-sm shadow">
                        <div className="twentytwenty-container">
                            <ReactBeforeSliderComponent
                                firstImage={FIRST_IMAGE2}
                                secondImage={SECOND_IMAGE2}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AfterTreatment;