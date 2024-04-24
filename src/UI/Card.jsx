import React, { useContext } from "react";
import Button from "./Button";
import CartContext from "../helpers/CartContext";

const Card = (props) => {

    const cartContextMethod = useContext(CartContext)

    const onAddToCart = () => {
        cartContextMethod.addToCart(props.cartItem)
    }
    return (
                <div className="col-md-3 mb-3">
                    <div className="card h-100">
                        <div className="card-body">
                                <h5 className="card-title">{props.title}</h5>
                                <p className="card-text">{props.description}</p>
                                <h6>Price : ${props.price}</h6>
                                <Button className={'btn btn-primary'} text={'Buy now'} onClick={onAddToCart}/>
                        </div>
                    </div>
                </div>
    )
}

export default Card;