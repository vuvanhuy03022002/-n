import React from 'react';
import Order from '../components/order/Order';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
OrderPage.propTypes = {
    
};

function OrderPage(props) {
    return (
        <div>
            <Header></Header>
            <Order></Order>
            <Footer></Footer>
        </div>
    );
}

export default OrderPage;