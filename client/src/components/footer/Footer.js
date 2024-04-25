import React from 'react';
import './Footer.css'
import logofooter from '../../assets/images/logobeefooter.png'

function Footer(props) {
    return (
        <section id="footer">
            <div className="footer">
                <div className="footer-top">
                    <div className="footer-top-name">
                        <img src={logofooter} alt='logofooter'/>
                    </div>
                    <div className="footer-top-about">
                        <h2>SHOP GIÀY FOURBEE</h2>
                        <ul>
                            <li>
                                <a>FOURBEE SHOES STORE<p> Nơi trao tặng các sản phẩm giày thời trang trẻ trung, phong cách, bắt trend cho giới trẻ. </p></a>
                            </li>
                            <li>
                                <a>Địa chỉ <p>122 Tôn Đức Thắng, phường Hòa Minh, quận Liên Chiểu, Thành phố Đà Nẵng</p></a>
                            </li>
                            
                            
                        </ul>
                    </div>
                    <div style={{textAlign: 'center'}} className="footer-top-sp">
                        <h2>HỖ TRỢ KHÁCH HÀNG</h2>
                        <a>Giới thiệu</a><br></br><br></br>
                        <a>Liên hệ</a><br></br><br></br>
                        <a>Sản phẩm</a>
                    </div>
                    <div style={{textAlign: 'center'}} className="footer-top-delivery">
                        <h2>DANH MỤC</h2>
                        <ul>
                            <li>
                                <a>NIKE</a>
                            </li>
                            <li>
                                <a>MLB</a>
                            </li>
                            <li>
                                <a>LUXURY</a>
                            </li>
                            <li>
                                <a>CONVERSE</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bot">
                    
                    <p>Copyright © 2023 FourBee. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
}

export default Footer;