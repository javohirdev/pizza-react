import React from 'react';
import shoppingCart from './cart.svg';

const Card = ({data, addToCart}) => {
    return (
        <div className='card'>
            <div className='cardHeader'>
                <img src={data.url} title={data.title} className="card-image" alt="productImage" />
            </div>
            <div className='cardBody'>
                <h3 className='cardTitle'>{data.title}</h3>
                <p className='cardDesc'>{data.desc}</p>
                <p className='cardPrice'><span>{data.price} сум</span></p>
                <button className='add-to-cart' onClick={() => addToCart(data)}>
                    <img src={shoppingCart} className='cartIcon' />
                    ЗАКАЗАТЬ
                </button>
            </div>
        </div>
    );
};


export default Card;