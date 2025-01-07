import "./Main.css"
import to_do from "../images/to_do_list_icon.png";

export function Main() {
    return (
        <div className="Main">
            <div className='text1'>
                Управляйте своими планами с легкостью!
            </div>
            <div className='text2'>
                Упростите себе жизнь, отслеживайте задачи и фиксируйте прогресс
            </div>
            <div class="to_do">
                <img src={to_do} alt="to_do" />
            </div>
        </div>
    );
}