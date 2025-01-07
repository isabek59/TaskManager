import { Link } from "react-router-dom";
import "./Register.css"
import { ApiService } from "../service/ApiService"
import { useState } from "react";

export function Register() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const [errorMsg, setErrorMsg] = useState("")


    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleChangePasswordConfirm = (event) => {
        setPasswordConfirm(event.target.value);
    }
    const handleChangeName = (event) => {
        setName(event.target.value);
    }
    const handleChangeSurname = (event) => {
        setSurname(event.target.value);
    }

    function passwordIsValid() {
        if (password !== passwordConfirm) {
            setErrorMsg("Введенные пароли не совпадают.")
            return false
        }
        if (password.length < 8) {
            setErrorMsg("Пароль должен содержать хотя бы 8 символов.")
            return false
        }
        return true
    }


    const onAuth = async (event) => {
        event.preventDefault();
        if (!passwordIsValid()) {
            return
        }

        window.localStorage.removeItem("access");
        window.localStorage.removeItem("refresh");

        const { access, refresh } = await ApiService("token/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: email, password }),
        });

        window.localStorage.setItem("access", access);
        window.localStorage.setItem("refresh", refresh);
        window.location.href = "/";
    };


    const onRegister = async (event) => {
        const formData = new FormData();
        formData.append("username", email);
        formData.append("password", password);
        formData.append("first_name", name);
        formData.append("last_name", surname);

        await ApiService("user/", {
            method: "post",
            body: formData,
        });

        await onAuth(event);
    };
    return (
        <div className="wrapper">
            <div className='login-header'>
                <h2>Регистрация</h2>
            </div>
            <Link to="/login">
                <div className="a">Уже зарегистрированы? Войти</div>
            </Link>
            {errorMsg && (
                <div className="error_msg">{errorMsg}</div>
            )

            }
            <div className="form">
                <div className="input_wrapper">
                    <input className="input"
                        placeholder="Имя"
                        value={name}
                        onChange={handleChangeName}
                    // type="email"
                    />
                </div>

                <div className="input_wrapper">
                    <input className="input"
                        placeholder="Фамилия"
                        value={surname}
                        onChange={handleChangeSurname}
                    // type="password"
                    />
                </div>
                <div className="input_wrapper">
                    <input className="input"
                        placeholder="Электронная почта"
                        value={email}
                        onChange={handleChangeEmail}
                    />
                </div>
                <div className="input_wrapper">
                    <input className="input"
                        type="password"
                        placeholder="Придумайте пароль"
                        value={password}
                        onChange={handleChangePassword}
                    />
                </div>
                <div className="input_wrapper">
                    <input className="input"
                        type="password"
                        placeholder="Повторите пароль"
                        value={passwordConfirm}
                        onChange={handleChangePasswordConfirm}
                    />
                </div>
                <button className="button" onClick={onRegister}>
                    Зарегистрироваться
                </button>
            </div>
        </div>
    );
}