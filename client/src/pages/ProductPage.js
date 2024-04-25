import React from 'react';
import Header from '../components/header/Header';
import AllProduct from '../components/allProduct/AllProduct';
import Footer from '../components/footer/Footer';

ProductPage.propTypes = {
    
};

function ProductPage(props) {
    return (
        <div>
            <Header></Header>
            <AllProduct></AllProduct>
            <Footer></Footer>
        </div>
    );
}

export default ProductPage;