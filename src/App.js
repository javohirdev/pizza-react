import React, { useState, useEffect } from 'react';
import Cart from './components/Cart';
import Products from './components/Products';
import logo from './components/logo.png';
import filterList from './components/filterList';
import './App.css';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setProducts(filterList([], null));
        if(JSON.parse(localStorage.getItem("cart"))) {
            setCart(JSON.parse(localStorage.getItem("cart")));
        }
    }, [])

    const addToCart = (item) => {
        const productList = [...cart];
        if(!productList.includes(item)){
            productList.push(item);
        }
        const index = productList.indexOf(item);
        productList[index].quantity++;
        setCart(productList);
        localStorage.setItem("cart", JSON.stringify(productList));

        alert("Пицца добавлен", cart);
        console.log(index);
    }

    const changeQuantity = (item, e) => {
        const productList = [...cart];
        const index = productList.indexOf(item);
        if(e === '+'){
            productList[index].quantity++;
        } else {
            if(productList[index].quantity > 1){
                productList[index].quantity--;
            } else {
                productList.splice(index, 1);
            }
        }
        localStorage.setItem("cart", JSON.stringify(productList));
        setCart(productList);
    }

    return (
        <>
            <div className='header'>
                <img src={logo} className='brand' />
                <Cart products={cart} changeQuantity={changeQuantity} />
            </div>
            <Products products={products} addToCart={addToCart} />
        </>
    );
};

export default App;