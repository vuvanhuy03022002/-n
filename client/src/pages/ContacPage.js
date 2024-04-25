import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import CreateContact from '../components/Contact/contact';


function ContactPage(props) {
    return (
        <div>
            <Header></Header>
            <CreateContact></CreateContact>
            <Footer></Footer>
        </div>
    );
}

export default ContactPage;