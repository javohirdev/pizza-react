import React from 'react';
import CardList from './CardList';

const Products = ({ products, addToCart }) => {
    return (
        <div className='products'>
            <h3 className='themeText'>Пицца</h3>
            <CardList products={products} addToCart={addToCart} />
        </div>
    );
};
export default Products;