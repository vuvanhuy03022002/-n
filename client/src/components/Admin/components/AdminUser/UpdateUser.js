import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserById, updateUser } from '../../../../actions/UserAction';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './AdminUser.css';

const UserUpdate = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.UserById);
  const history = useHistory();

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  useEffect(() => {
    dispatch(getUserById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (userDetails && userDetails.user) {
      const { name, email, phone, address } = userDetails.user;
      setUserData({ name, email, phone, address });
    }
  }, [userDetails]);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!userData.name || !userData.email || !userData.phone || !userData.address) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }

    dispatch(updateUser(id, userData));
    history.push('/admin/customer');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      // Kiểm tra nếu giá trị nhập không chỉ chứa các chữ số
      if (!/^\d+$/.test(value)) {
        alert('Số điện thoại chỉ được nhập bằng số!');
        return;
      }
    }

    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className='updateUserz'>
      <h2>Cập nhật người dùng</h2>
      {userDetails && userDetails.user && (
        <form onSubmit={handleUpdate} className='updateUser'>
          <input 
            placeholder='Name' 
            type="text" 
            name="name" 
            value={userData.name} 
            onChange={handleChange} 
            required 
          /><br></br>
          <input 
            placeholder='Email' 
            type="email" 
            name="email" 
            value={userData.email} 
            onChange={handleChange} 
            required 
          /><br></br>
          <input 
            placeholder='Phone' 
            type="tel" 
            name="phone" 
            value={userData.phone} 
            onChange={handleChange} 
            required 
          /><br></br>
          <input 
            placeholder='Address' 
            type="text" 
            name="address" 
            value={userData.address} 
            onChange={handleChange} 
            required 
          /><br></br>
          <button type="submit">Cập nhật</button>
        </form>
      )}
    </div>
  );
};

export default UserUpdate;