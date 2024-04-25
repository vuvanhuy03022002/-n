import React, { useState } from 'react';
import './Signup.css'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { SignupUser } from '../../actions/UserAction'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Login(props) {
  const dispatch = useDispatch()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [signupSuccess, setSignupSuccess] = useState(false); // State để xác định khi nào hiển thị thông báo đăng ký thành công

  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = data => {
    if (password === confirmPassword) {
      dispatch(SignupUser(data)).then(() => {
        setSignupSuccess(true); // Set state thành true khi đăng ký thành công
        setTimeout(() => {
          setSignupSuccess(false); // Ẩn thông báo sau 3 giây
        }, 3000);
      });
    } else {
      alert("Mật khẩu không trùng khớp")
    }
  } 
  return (
    <div className="signup-page">
      <h2 style={{fontFamily: "sans-serif", marginTop: "15px"}}>ĐĂNG KÍ</h2>
      <form onSubmit={handleSubmit(onSubmit)} classname="form-signup">
        <input {...register("name")} placeholder="Tên đăng nhập" required></input>
        <input
          {...register("email")}
          placeholder="Email"
          type="email"
          required
        ></input>
        <input
  {...register("password", { required: true, minLength: 6 })}
  placeholder="Mật khẩu"
  type="password"
  onChange={(e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 6) {
      e.target.setCustomValidity("Mật khẩu phải có ít nhất 6 ký tự");
    } else {
      e.target.setCustomValidity("");
    }
  }}
  required
></input>
        <input
          {...register("repeat password")}
          placeholder="Nhập lại mật khẩu"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        ></input>
        
        <input type="submit" value="Đăng Kí"></input>
        <div className='su'>
        <Link to="/login"><input type="submit" value="Đăng Nhập"></input></Link>
        </div>
        {signupSuccess && <p style={{color:'green', fontFamily:'Inter,Helvetica,Arial,sans-serif'}} className="success-message">Đăng ký thành công!</p>} {/* Hiển thị thông báo khi đăng ký thành công */}

      </form>
    </div>
  );
}

export default Login;