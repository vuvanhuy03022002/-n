import React from 'react';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer';
import Pay from '../components/order/Pay';
function PayPage(props) {
    return (
        <div>
            <Header></Header>
            <Pay></Pay>
            <Footer></Footer>
        </div>
    );
}

export default PayPage;