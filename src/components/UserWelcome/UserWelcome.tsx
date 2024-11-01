
import css from './UserWelcome.module.css';

const UserWelcome = () => {

    // const login = document.querySelector('.login');
    // const register = document.querySelector('.register');

    // const openModal = () => {

    // }

    return (
        <ul className={css.list}>
            <li className={css.item}>
                <svg width="20" height="20" className={css.icon}>
                    <use href="./images/sprite.svg#icon-login" >
                    </use>
                </svg>
                <button className={css.login}>
                    Log in
                </button>
            </li>
            <li className={css.item}>
                <button className={css.register}>
                    Registration
                </button>
            </li>
        </ul>
    )
}

export default UserWelcome
