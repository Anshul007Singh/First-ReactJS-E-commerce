import '../css/Cart.css'

const CartList = ({ id, name, price, quantity, onIncrease, onDecrease, item }) => {
    
    return (
        <div>
             <li key={id} className="cart-item">
                                     <div className="d-flex">
                                         <div className="item-info"> 
                                             <div className="item-details">
                                                 <h3>{name}</h3>
                                                 <p>Price: ${price}</p>
                                             </div>
                                         </div>
                                         <div>
                                             <div className="item-actions">
                                                 <div className="quantity">
                                                     <button onClick={onIncrease} style={{ margin: "1%" }}>+</button>
                                                     <p className='quant mx-2'>{quantity} </p>
                                                     <button onClick={onDecrease} style={{ margin: "1%", fontWeight:'600'}}>-</button>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </li>
        </div>
    )
}

export default CartList