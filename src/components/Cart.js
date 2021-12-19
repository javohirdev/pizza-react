import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';

const Cart = ({ products, changeQuantity }) => { /**SHOPPING CARTIMIZ ICHI, SAVATCHANI ICHI */
    const [classActive, toggleClass] = useState(false);
    const [sum, setSum] = useState(0);

    const toggleButton = () => {
        toggleClass(!classActive);
    }

    useEffect(() => { /**JAMI SUMMANI HISOBLASH UCUN */
        let total = 0;
        for(var i = 0; i < products.length; i++) {
            total+= products[i].price*products[i].quantity;
        }
        setSum(total);
    }, [products])

    const checkout = () => {
        alert(`Subtotal: $ ${sum.toFixed(2)}`);
    }

    return (
        <>
            <button className='toggle-btn' onClick={toggleButton}>
                Cart
            </button>
            <div id="shoppingcart" className={classActive ? "active" : ""}>
                <div className='shopping-cart'>
                    <div className='cartContent'>
                        <div className='cartList'>
                            {
                                products.length === 0
                                ?
                                <div className='emptyCart'>
                                    <img src="https://collabkart.com/img/empty-cart.gif" className='emptyGIF' />
                                </div>
                                :
                                products.map(product => {
                                    return(
                                        <>
                                            <CartItem
                                                key={product.id}
                                                product={product}
                                                changeQuantity={changeQuantity}
                                            />
                                        </>
                                    )
                                })
                            }
                        </div>

                        <div className='total'>
                            <div className='info'>
                                <p className='totalText'>Total</p>
                                <p className='totalPrice'>UZS: {sum.toFixed(2)}</p>
                            </div>
                            <button onClick={checkout} className='purchaseBtn'>Purchase</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Cart;