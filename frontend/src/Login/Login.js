import { Link } from "react-router-dom";
import "./Login.css"


export function Login() {
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
                    />
                </div>
                <div className="input_wrapper">
                    <input className="input"
                        placeholder="Пароль"
                        type="password"
                    />
                </div >

            </div>
            <button className="button">
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