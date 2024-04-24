import React, { useContext } from "react";
import Button from "../UI/Button";
import CartContext from "../helpers/CartContext";
import AuthContext from "../helpers/AuthContext";
import UserAction from "../helpers/UserAction";
import Cart from "./Cart";

const Header = () => {

    const cartContextData = useContext(CartContext);
    const authContext = useContext(AuthContext);
    const userActions = useContext(UserAction);

    const totalQuantity = cartContextData.items.reduce((totalItem, item) => {
        return totalItem + item.quantity
    }, 0);

    const onLogout = () => {
        authContext.onLogout();
    }

    const onShowCart = () => {
        userActions.openCart()
    }

    return (
        <div>
           <nav className="navbar navbar-expand-lg bg-dark bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                    <a className="navbar-brand" href="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" href="eee">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="4">Link</a>
                        </li>
                        </ul>
                        <div className="d-flex">
                                <button type="button" className="btn btn-outline-light position-relative me-4" onClick={onShowCart}>
                                Cart
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                                    {totalQuantity}
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                                </button>
                                <Button className={'btn btn-outline-danger me-3'} onClick={onLogout} text={'Logout'}/>
                        </div>
                </div>
            </div>
            </nav>
            {userActions.actions === 'cart' && <Cart show={userActions.actions === 'cart'} onClose={!userActions.actions === 'cart'} />}
        </div>
    )
}

export default Header;