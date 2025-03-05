import { Link } from "react-router-dom";
import { useState } from "react";
import { shopsidebarcartdata } from "../constant/alldata";

function ShopSidebar(){
    const [arrayData, setArrayData]  = useState(shopsidebarcartdata);
    const handleRemove = (index) => {
        setArrayData((prevItems) => prevItems.filter((_, i) => i !== index));
    };
    function handleIncrease(ind){
        setArrayData((prev)=>{
            const updateData = [...prev]            
            updateData[ind] = {
                ...updateData[ind],
                quantity: updateData[ind].quantity + 1,
            };
            return updateData;                         
        })
    }
    function handledDecrease(ind){
        setArrayData((prev)=>{
            const updateData = [...prev]
            updateData[ind] = {
                ...updateData[ind],
                quantity: updateData[ind].quantity > 1 ? updateData[ind].quantity - 1 : updateData[ind].quantity,
            };
            return updateData;  
        })
    }
    const totalPrice = arrayData.reduce((acc , item) => acc + (item.price * item.quantity), 0);
    return(
        <> 
            <div className="sidebar-cart-wrapper">
                <h2 className="sidebar-title">Shopping Cart <span className="badge badge-primary badge-circle px-0">3</span></h2>
                <div className="shop-sidebar-cart">
                    <ul className="sidebar-cart-list">
                        {arrayData.map((data, index) => (
                            <li key={index}>
                                <div className="cart-widget">
                                    <div className="dz-media me-3">
                                        <img src={data.image} alt="" />
                                    </div>
                                    <div className="cart-content">
                                        <h3 className="title"><Link to="/shop-details">{data.title}</Link></h3>
                                        <div className="d-flex align-items-center">
                                            <div className="btn-quantity quantity-sm style-2 me-3">
                                                <div className="input-group bootstrap-touchspin">
                                                    <span className="input-group-addon bootstrap-touchspin-prefix d-none"> </span>
                                                    <input type="text" value={data.quantity}  className="quantity-input form-control d-block" />
                                                    <span className="input-group-addon bootstrap-touchspin-postfix d-none"></span>
                                                    <span className="input-group-btn-vertical">
                                                        <button onClick={() => handleIncrease(index)} className="btn btn-default bootstrap-touchspin-up" type="button">
                                                            <i className="fa-solid fa-plus" />
                                                        </button>
                                                        <button onClick={() => handledDecrease(index)} className="btn btn-default bootstrap-touchspin-down" type="button">
                                                            <i className="fa-solid fa-minus" />
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                            <h6 className="dz-price mb-0">${data.quantity * data.price}.00</h6>
                                        </div>
                                    </div>
                                    <Link onClick={() => handleRemove(index)} to={"#"} className="dz-close">
                                        <i className="feather icon-x" />
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-total">
                        <h5 className="mb-0">Subtotal:</h5>
                        <h5 className="mb-0"> ${totalPrice}.00</h5>
                    </div>
                    <div className="mt-auto text-center">
                        <Link to="#" className="btn btn-primary btn-hover1 mx-1">Checkout</Link>
                        <Link to="#" className="btn btn-secondary btn-hover1 mx-1">View Cart</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ShopSidebar;