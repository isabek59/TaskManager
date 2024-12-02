import "./Header.css"
import { Link } from "react-router-dom";

export function Header() {
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
                <Link to='/login'>
                    <button className='log-in'>Войти</button>
                </Link>
            </div>
        </div>
    );
}