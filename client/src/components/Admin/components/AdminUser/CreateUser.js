import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../../../actions/UserAction';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './AdminUser.css'

const UserCreate = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false); 
  const history = useHistory();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    if (!name) {
      alert('Vui lòng nhập tên!');
      return;
    }

    if (password.length < 6) {
      alert('Mật khẩu cần ít nhất 6 ký tự!');
      return;
    }

    dispatch(createUser({ name, email, password, isAdmin })); 
    setName('');
    setEmail('');
    setPassword('');
    setIsAdmin(false); 
    history.push('/admin/customer'); 
  };

  return (
    <div className='createuserz'>
      <h2 style={{
        paddingLeft:'20px', textAlign: 'center', color: '#6b6b6b', fontFamily:'-apple-system, system-UI, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif'
      }}>Thêm Người Dùng</h2>
      <form onSubmit={submitHandler} className='createuser'>
        <div>
          <input 
            placeholder='Name' 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div> 
          <input 
            placeholder='Email' 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <input 
            placeholder='Password' 
            type="password" 
            value={password} 
            onChange={(e) => {
              setPassword(e.target.value);
              if (e.target.value.length < 6) {
                e.target.setCustomValidity("Mật khẩu cần ít nhất 6 ký tự");
              } else {
                e.target.setCustomValidity("");
              }
            }} 
            required 
          />
        </div>
        <button type="submit">Thêm Tài Khoản</button>
      </form>
    </div>
  );
};

export default UserCreate;