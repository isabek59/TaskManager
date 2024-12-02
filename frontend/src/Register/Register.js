import { Link } from "react-router-dom";
import "./Register.css"

export function Register() {
    return (
        <div className="wrapper">
            <div className='login-header'>
                <h2>Регистрация</h2>
            </div>
            <Link to="/login">
                <div className="a">Уже зарегистрированы? Войти</div>
            </Link>
            <div className="form">
                <div className="input_wrapper">
                    <input className="input"
                        placeholder="Имя"
                    // type="email"
                    />
                </div>

                <div className="input_wrapper">
                    <input className="input"
                        placeholder="Фамилия"
                    // type="password"
                    />
                </div>
                <div className="input_wrapper">
                    <input className="input"
                        placeholder="Электронная почта"
                    />
                </div>
                <div className="input_wrapper">
                    <input className="input"
                        placeholder="Придумайте пароль"
                    />
                </div>
                <div className="input_wrapper">
                    <input className="input"
                        placeholder="Повторите пароль"
                    />
                </div>
                <button className="button">
                    Зарегистрироваться
                </button>
            </div>
        </div>
    );
}