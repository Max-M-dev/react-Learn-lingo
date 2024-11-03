
import css from './UserWelcome.module.css';

interface UserWelcomeProps {
    onLoginClick: () => void;
    onRegisterClick: () => void;
}

const UserWelcome: React.FC<UserWelcomeProps> = ({onLoginClick, onRegisterClick}) => {

    return (
        <ul className={css.list}>
            <li className={css.item}>
                <svg width="20" height="20" className={css.icon}>
                    <use href="./images/sprite.svg#icon-login" >
                    </use>
                </svg>
                <button className={css.login} onClick={onLoginClick}>
                    Log in
                </button>
            </li>
            <li className={css.item}>
                <button className={css.register} onClick={onRegisterClick}>
                    Registration
                </button>
            </li>
        </ul>
    )
}

export default UserWelcome
