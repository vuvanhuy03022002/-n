import React from 'react';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer';
import SearchPage from '../components/allProduct/Search/search';
function Searchz(props) {
    return (
        <div>
            <Header></Header>
            <SearchPage></SearchPage>
            <Footer></Footer>
        </div>
    );
}

export default Searchz;