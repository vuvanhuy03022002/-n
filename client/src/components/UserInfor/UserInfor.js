import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserById, updateUser } from '../../actions/UserAction';
import './UserInfor.css';

const Profile = () => {
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userProfile = useSelector((state) => state.UserById);
  const { loading, user, error } = userProfile;

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const [updateSuccess, setUpdateSuccess] = useState(false);

  useEffect(() => {
    if (!user || !user.name) {
      dispatch(getUserById(userInfo._id)); 
    } else {
      setName(user.name);
      setAddress(user.address);
      setPhone(user.phone);     
 
    }
  }, [dispatch, user, userInfo._id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateUser(userInfo._id, { name, address, phone })).then(() => {
      setUpdateSuccess(true);
      setTimeout(() => {
        setUpdateSuccess(false);
      }, 2000);
    });
    await dispatch(getUserById(userInfo._id)); 
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className='profile'>
          
          <h2> Thông Tin Cá Nhân </h2>
          <form onSubmit={handleSubmit}>
            <label>Tên:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <label>Địa Chỉ:</label>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            <label>SDT: </label>
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <button type="submit">Sửa Thông Tin</button>
            {updateSuccess && <p style={{color: 'red', marginTop:'5px'}} className="success-message">Profile updated successfully!</p>}
          </form>
        </div>
      )}
    </div>
  );
};

export default Profile;
