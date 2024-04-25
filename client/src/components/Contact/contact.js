import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createContact } from '../../actions/ContactAction';
import './Contact.css';

const CreateContact = () => {
  const dispatch = useDispatch();

  const [name_contact, setName] = useState('');
  const [phone_contact, setPhone] = useState('');
  const [email_contact, setEmail_contact] = useState('');
  const [address_contact, setAddress] = useState('');
  const [content_contact, setContent] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const contactCreate = useSelector((state) => state.contactCreate);
  const { loading, success, error } = contactCreate;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (!name_contact || !phone_contact || !email_contact || !address_contact || !content_contact) {
      return;
    }

    dispatch(createContact({ name_contact, phone_contact, email_contact, address_contact, content_contact }));
    setShowSuccessMessage(true);
  };

  return (
    <div className='contact-page'>
      <h2 style={{ fontFamily: "sans-serif", marginTop: "15px" }}>LIÊN HỆ</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            type="text" 
            placeholder="Tên của bạn" 
            value={name_contact} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <input 
            type="email" 
            placeholder="Email" 
            value={email_contact} 
            onChange={(e) => setEmail_contact(e.target.value)} 
            required 
          />
        </div>
        <div>
          <input 
            type="tel" 
            placeholder="Số điện thoại" 
            value={phone_contact} 
            onChange={(e) => setPhone(e.target.value.replace(/\D/, ''))} // Chỉ cho phép nhập số
            pattern="[0-9]{10,12}" // Chấp nhận từ 10 đến 12 số
            title="Vui lòng nhập số điện thoại từ 10 đến 12 chữ số" // Thông báo khi nhập không hợp lệ
            required 
          />
        </div>
        <div>
          <input 
            type="text" 
            placeholder="Địa chỉ" 
            value={address_contact} 
            onChange={(e) => setAddress(e.target.value)} 
            required 
          />
        </div>
        <div>
          <textarea 
            placeholder="Nội dung" 
            value={content_contact} 
            onChange={(e) => setContent(e.target.value)} 
            required 
          ></textarea>
        </div>
        <input type="submit" value="Gửi"></input>
        {showSuccessMessage && (
          <div className="success-message">
<p style={{ color: 'green', fontFamily: 'sans-serif' }}>Cập nhật thành công!</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default CreateContact;