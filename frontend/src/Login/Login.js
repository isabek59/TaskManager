import { Link } from "react-router-dom";
import "./Login.css"
import { ApiService } from "../service/ApiService"
import { useState } from "react";



export function Login() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeLogin = (event) => {
        setLogin(event.target.value);
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const onAuth = async (event) => {
        event.preventDefault();

        window.localStorage.removeItem("access");
        window.localStorage.removeItem("refresh");

        const { access, refresh } = await ApiService("token/", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: login, password }),
        });


        if (access) {
            window.localStorage.setItem("access", access);
            window.localStorage.setItem("refresh", refresh);
            window.location.href = "/";
        } else {
            window.location.href = "/login";
        }
    };
    return (
        <div className='wrapper'>
            <div className='login-header'>
                <h2>Вход в профиль</h2>
            </div>

            <div className="form">
                <div className="input_wrapper">
                    <input className="input"
                        placeholder="Электронная почта"
                        type="email"
                        onChange={handleChangeLogin}
                    />
                </div>
                <div className="input_wrapper">
                    <input className="input"
                        placeholder="Пароль"
                        type="password"
                        onChange={handleChangePassword}
                    />
                </div >

            </div>
            <button className="button" onClick={onAuth}>
                Войти
            </button>
            <Link to="/register">
                <button className="button">
                    Зарегистрироваться
                </button>
            </Link>
        </div>
    );
}