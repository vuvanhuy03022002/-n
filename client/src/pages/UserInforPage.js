import React from 'react';
import UserProfile from '../components/UserInfor/UserInfor';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';


function UserPage(props){
  
  return (
    <div>
      <Header></Header>
      <UserProfile></UserProfile>
      <Footer></Footer>
    </div>
  );
};

export default UserPage;
