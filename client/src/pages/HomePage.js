import React from 'react';
import Header from '../components/header/Header';
import Carousel from '../components/Slider/Carousel';
import Footer from '../components/footer/Footer'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import { useSelector } from 'react-redux';
import NEW from '../components/HotSale/components/New';
import SALE from '../components/HotSale/components/Sale';
import FAVORITE from '../components/HotSale/components/Favorite';

function HomePage(props) {
    const {userInfo} = useSelector(state => state.userSignin)
    
    return (
        <div style={{position: 'relative'}}>
            <Header></Header>
            <Carousel></Carousel>
            <NEW></NEW>
            <SALE></SALE>
            <FAVORITE></FAVORITE>
            <Footer></Footer>
            <ScrollToTop></ScrollToTop>
            
        </div>
    );
}

export default HomePage;