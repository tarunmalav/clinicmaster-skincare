function StarRating() {
    return (
        <>
            <ul id="stars">
                <li className="star" title="Poor" data-value="1">
                    <i className="fas fa-star fa-fw" />
                </li>
                <li className="star" title="Fair" data-value="2">
                    <i className="fas fa-star fa-fw" />
                </li>
                <li className="star" title="Good" data-value="3">
                    <i className="fas fa-star fa-fw" />
                </li>
                <li className="star" title="Excellent" data-value="4">
                    <i className="fas fa-star fa-fw" />
                </li>
                <li className="star" title="WOW!!!" data-value="5">
                    <i className="fas fa-star fa-fw" />
                </li>
            </ul>
        </>
    )
}
export default StarRating;