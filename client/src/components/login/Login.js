import React, { useEffect } from 'react';
import './Login.css'
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import {login} from '../../actions/UserAction'
import { useHistory } from 'react-router';
import {Link} from 'react-router-dom'

function Login(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const user = useSelector((state) => state.userSignin);
  const { userInfo, error } = user;

  const onSubmit = (data) => {
    dispatch(login(data));
  };

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  });

  return (
    <div class="login-page">
      <h2 style={{fontFamily: "sans-serif", marginTop: "55px"}}> ĐĂNG NHẬP </h2>
      <form onSubmit={handleSubmit(onSubmit)} class="form-login">
        <input {...register("email")} placeholder="Email" required></input>
        <input
          {...register("password")}
          placeholder="Mật khẩu"
          type="password"
          required
        ></input>

        <input type="submit" value="Đăng Nhập"></input>
        {error ? <h2>{error}</h2> : <></>}
        <div className='su'>
        <Link to="/register"><input type="submit" value="Tạo tài khoản?"></input></Link>
        </div>

      </form>
    </div>
  );
}

export default Login;