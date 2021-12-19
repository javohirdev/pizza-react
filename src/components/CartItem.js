import React from 'react';

const CartItem = ({ product, changeQuantity }) => {
    return (
        <div className='cartItem'>
            <img src={product.url} alt="cart-item" className='cartItemImage' />
            <div className='cartMain'>
                <div>
                    <p className='itemTitle'>{product.title}</p>
                    <span className='cartPrice'>UZS: {product.price}</span>
                </div>
                <div>
                    <p className='itemQuantity'>Число: <span>{product.quantity}</span></p>
                    <div>
                        <button className='quantityBtn' onClick={() => changeQuantity(product, '-')}>-</button>
                        <button className='quantityBtn' onClick={() => changeQuantity(product, '+')}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;