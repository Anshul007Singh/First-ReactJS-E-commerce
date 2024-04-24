import React, { useContext } from "react";
import Button from "../UI/Button";
import UserAction from "../helpers/UserAction";
import '../css/Cart.css';
import { Modal } from 'react-bootstrap';
import { PayPalButtons } from "@paypal/react-paypal-js";
// import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import CartContext from "../helpers/CartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";


// import { PayPalButtons } from "@paypal/react-paypal-js";
// import { PayPalScriptProvider } from "@paypal/react-paypal-js";
 

const Payment = ({ show,totalAmount }) => {
    
    // const [setOrderID] = useState(false);
    console.log(totalAmount)

    const userActions = useContext(UserAction);
    const CartAction = useContext(CartContext);

   

    const createOrder = (data, actions,) => {
        return actions.order
          .create({
            purchase_units: [
              {
                description:'Purchase',
                amount: {
                  currency_code: 'USD',
                  value: totalAmount,
                },
              },
            ],
          })
            .then((orderID) => {
            return orderID;
          });
    };
    
    const onSuccessOrder = () => {
        toast.success('🦄 Yeah...! Order is successful', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
     }
    
    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            onSuccessOrder() ;
            CartAction.clearCart();
        });
    };

    let CLIENT_ID = 'AXvx9tEj10UvgNmnm0uYLbM4n7K7vnEZMt7kqniNVguAWvDo8tHAvqKbunOG0OAt3KxEIff2_126Qotp';

    return (
        <>
        <Modal    show={show}
                  onHide={userActions.closeCart}
                  centered backdrop="static"
                  keyboard={false}>
                <Modal.Header>
                     <Modal.Title>Checkout</Modal.Title>
                </Modal.Header>
            <Modal.Body>
                <h5 className="text-success fw-bold my-4">Total cart amount : ${ totalAmount}</h5>
                    <PayPalScriptProvider options={{ clientId: CLIENT_ID }}> 
                          <PayPalButtons style={{ layout: 'horizontal' }} createOrder={createOrder} onApprove={onApprove} />
                    </PayPalScriptProvider>
                </Modal.Body>
                <Modal.Footer>
                        <Button className={"btn btn-outline-danger"} text={'Close'} onClick={userActions.closeCart}/>
                </Modal.Footer>
            </Modal>
                <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />            
            </>
    )
}

export default Payment;