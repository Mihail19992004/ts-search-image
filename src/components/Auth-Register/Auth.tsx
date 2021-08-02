import React from 'react'
import './Auth.scss'
import {NavLink} from "react-router-dom";

export function Auth() {
    return (
        <div className='auth__main'>
            <div className="auth__main-border">
                <h1>Вход
                    <NavLink to='/register'>Регистрация</NavLink>
                </h1>
                <form action="" className='auth__main-name'>
                    <label htmlFor="login-name">Имя подьзователя</label>
                    <input type="text" id='login-name'/>
                </form>
                <form action="" className='auth__main-pass'>
                    <label htmlFor="login-pass">Пароль</label>
                    <input type="text" id='login-pass'/>
                </form>
                <div className="auth__main-border-button">
                    Вход
                </div>
            </div>


        </div>
    )
}