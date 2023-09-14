import React, { useState, Component } from 'react'
import '../css/Login.css'
import avatar from '../assets/img/profileimg.png'
import * as userService from '../services/UserServices'
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

class UserForm {
    name;
    username;
    email;
    password;
    confirmPassword;
    birthdate;
    //acceptTerms: boolean;
};

class LoginForm {
    email;
    password;
};


export default class Login extends Component {
    render() {
    const validationLogin = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Required'),
    });

    const validationRegister = Yup.object().shape({
        name: Yup.string().required('Fullname is required'),
        username: Yup.string()
          .required('Username is required')
          .min(6, 'Username must be at least 6 characters')
          .max(20, 'Username must not exceed 20 characters'),
        birthdate: Yup.date()
          .required('Please enter a date of birth')
          .max(new Date(), "You can't be born in the future!"),
          //.min(new Date().getFullYear() - new Date().setFullYear(13), "You must be 13!"),
        email: Yup.string()
          .required('Email is required')
          .email('Email is invalid'),
        password: Yup.string()
          .required('Password is required')
          .min(6, 'Password must be at least 6 characters')
          .max(40, 'Password must not exceed 40 characters'),
        confirmPassword: Yup.string()
          .required('Confirm Password is required')
          .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
        //acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
      });

    const {register, handleSubmit, formState: { errors }} = useForm<UserForm>({resolver: yupResolver(validationRegister)});
    const {register : login ,handleSubmit : formValidate ,formState: { errors : err }} = useForm<LoginForm>({resolver: yupResolver(validationLogin)});
    let navigate = useNavigate();
    let [registerView, setRegister] = useState(false);
    let [forgot, setForgot] = useState(false);

    const handleLog = formValidate(async (values) => {
        const res = await userService.LoginUser(values);
        if(res.data.auth){
            window.location.href = "/";
        } else{
            console.log("Wrong username or password");
        }
    });

    const handleReg = handleSubmit(async (values) => {
        const res = await userService.RegisterUser(values);
        if(res.status === 200){
			localStorage.setItem("user", res.data.id);
            localStorage.setItem("token", res.data.token);
            window.location.href = "/";
        }
    });

    return (
        <div className='login-container'>
            <form action="login" style={registerView || forgot ? {marginRight: "260vw", position: "absolute"} : {}} className='login-formContainer' onSubmit={handleLog}>
            <span className="login-header">Log in</span>
                <div className='login-input-container'>
                    <label style={{marginBottom: "20px"}} htmlFor="email">Email</label>
                    <input type="email" id="email" {...login("email")}/>
                    <p className="error-message">{err.email?.message}</p>
                </div>
                <div className='login-input-container'>
                    <label style={{marginBottom: "20px"}} htmlFor="password">Password</label>
                    <input type="password" id="password" {...login("password")}/>
                    <p className="error-message">{err.password?.message}</p>
                </div>
                <span className="login-forgot">¿Te has olvidado la contraseña? <a onClick={() => setForgot(true)} className="auth-link">Click aqui</a></span>
                <div className='login-input-container login-center'>
                    <button className='login-button' type="submit">Login</button>
                </div>
                <span className="login-forgot login-center">¿Aún no tienes una cuenta? <a onClick={() => setRegister(true)} className="auth-link">Registrate</a></span>
            </form>
            <div className="back-button" style={registerView || forgot ? {marginRight: "280vw"} : {}} onClick={() => {setRegister(false); setForgot(false)}}>
            </div>
            <form className='register' style={registerView ? {paddingBottom: "20px", width: "450px", marginLeft: "0vw"} : {paddingBottom: "20px", width: "450px"}} action="register" onSubmit={handleReg}>
            <span className="login-header">Registrate</span>
                <div className='login-input-container'>
                    <label style={{marginBottom: "20px"}} htmlFor="regName">Name</label>
                    <input type="text" id="name" {...register("name")}/>
                    <p className="error-message">{errors.name?.message}</p>
                </div>
				<div style={{display: "inline-flex", justifyContent: "center", width: "80%"}}>
					<div style={{marginRight: "2%"}} className='login-input-container'>
                	    <label style={{marginBottom: "20px"}} htmlFor="regUsername">Username</label>
                	    <input style={{width: "95%"}} type="text" id="username" {...register("username")}/>
                        <p className="error-message">{errors.username?.message}</p>
                	</div>
					<div style={{marginRight: "-2.6%", marginLeft: "2%"}} className='login-input-container'>
                	    <label style={{marginBottom: "20px"}} htmlFor="regUsername">Birth date</label>
                	    <input style={{width: "95%"}} type="date" id="birthdate" {...register("birthdate")}/>
                        <p className="error-message">{errors.birthdate?.message}</p>
                	</div>
				</div>
                <div className='login-input-container'>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" {...register("password")}/>
                    <p className="error-message">{errors.password?.message}</p>
                </div>
				<div className='login-input-container'>
                    <label htmlFor="repPassword">Repeat password</label>
                    <input type="password" id="confirmPassword" {...register("confirmPassword")}/>
                    <p className="error-message">{errors.confirmPassword?.message}</p>
                </div>
				<div className='login-input-container'>
                    <label htmlFor="registerEmail">Email</label>
                    <input type="email" id="email" {...register("email")}/>
                    <p className="error-message">{errors.email?.message}</p>
                </div>
                <div className='login-input-container login-center'>
                    <button className='login-button' type="submit">Register</button>
                </div>
            </form>
            <form style={forgot ? {paddingBottom: "20px", marginLeft: "0vw"} : {paddingBottom: "20px"}} className="forgot" action="forgotPass">
            <span className="login-header">Recuperar contraseña</span>
                <div className='login-input-container login-center'>
                    <label style={{marginBottom: "48px", width: "0vw"}} htmlFor="forgot-email">Email</label>
                    <input type="email" name="forgot-email" id="forgot-email" />
                </div>
                <div className='login-input-container login-center'>
                    <button className='login-button' type="submit">Recuperar</button>
                </div>
            </form>
        </div>
    )
    }
}