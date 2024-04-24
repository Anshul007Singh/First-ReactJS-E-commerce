import React, { useContext, useState } from "react";
import CartContext from "../helpers/CartContext";
import Button from "../UI/Button";
import UserAction from "../helpers/UserAction";
import '../css/Cart.css';
import {Modal} from 'react-bootstrap';
// import {Button} from 'react-bootstrap'
import Payment from "./Payment";
import CartList from "../UI/CartList";


const Cart = (props) => {

    const cartData = useContext(CartContext);
    const userActions = useContext(UserAction);
    const [show, setShow] = useState(userActions.actions)

    const totalCartValue = cartData.items.reduce((totalPrice, item) => {
        return totalPrice + item.quantity * item.price
    }, 0);

    const onCloseCart = () => {
        userActions.closeCart();
    }

    const onShowPaymentModal = () => {
        // userActions.onCheckout();
        setShow('checkout');
    }

    let cartLength = cartData.items.length

    let cartModal = <Modal
                            show={props.show}
                            onHide={onCloseCart}
                            backdrop="static"
                            keyboard={false}
                            centered
                        >
                            <Modal.Header className="ms-2">
                            <Modal.Title>Your Cart</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>  
                                {cartLength === 0 ? <h5 className="text-center text-danger">Please add some item to Cart</h5> :
                                    <ul>
                                        {cartData.items.map((item) => (
                                            <CartList
                                                id={item.id}
                                                name={item.title}
                                                price={item.price}
                                                quantity={item.quantity}
                                                item={item}
                                                onIncrease={() => cartData.addToCart(item)}
                                                onDecrease={() => cartData.removeFromCart(item.id)}
                                            />
                                        ))}
                                            <p className="text-success fw-bold ms-2">Total price - ${totalCartValue}</p>
                                    </ul>          
                                }
                            </Modal.Body>
                            <Modal.Footer>
                                    <Button className={'btn btn-outline-danger'} text = {'Close'}  onClick={onCloseCart}/>
                                    <Button className={'btn btn-outline-success'} text={'Proceed to pay'} disabled = {!cartLength}  onClick={onShowPaymentModal}/>
                            </Modal.Footer>
                    </Modal>

    let paymentModal = <Payment show={show } totalAmount = {totalCartValue} />
    return (
        
        <div>
            {show === 'cart' && cartModal}
            {show === 'checkout' && paymentModal}
        </div>
    )
}

export default Cart;