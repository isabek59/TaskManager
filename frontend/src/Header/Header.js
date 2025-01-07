import "./Header.css"
import { Link } from "react-router-dom";

export function Header() {
    const onLogout = () => {
        window.localStorage.removeItem("access");
        window.localStorage.removeItem("refresh");
        window.location.reload();
        window.location.href = "/";
    };

    const isAuth = Boolean(window.localStorage.getItem("access"));
    return (
        <div className='header'>
            <div className='header-container'>
                <Link to='/'><span className='title'>TaskManager</span></Link>
            </div>
            <div className="header-items">
                <Link to='/projects'>
                    <button className='usual'>Проекты</button>
                </Link>
                <Link to='/today'>
                    <button className='usual'>Сегодня</button>
                </Link>
                <Link to='/all'>
                    <button className="usual">Все задачи</button>
                </Link>
                <Link to='/done'>
                    <button className='usual'>Выполненные</button>
                </Link>
                {/* <Link to='/login'>
                    <button className='log-in'>Войти</button>
                </Link> */}
                {isAuth ? (
                    <button className="log-in" onClick={onLogout}>
                        Выйти</button>
                ) : (
                    <Link to="/login">
                        <button className="log-in"> Войти</button>
                    </Link>
                )}
            </div>
        </div>
    );
}