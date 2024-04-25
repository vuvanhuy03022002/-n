import React from 'react';
import Cart from '../components/ShoppingCart/Cart'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

function CartPage(props) {
    return (
        <div>
            <Header></Header>
            <Cart></Cart>
            <Footer></Footer>
        </div>
    );
}

export default CartPage;