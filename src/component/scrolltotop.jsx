import { useEffect, useState } from "react";

function ScrolltoTop() {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <>
            <button onClick={scrollToTop} className={`scroltop ${isVisible ? 'show' : ''}`} >
                <i className="fas fa-arrow-up" />
            </button>
        </>
    )
}
export default ScrolltoTop;