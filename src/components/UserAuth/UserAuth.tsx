
import { useAppDispatch } from "../../redux/store";
import { logOut } from '../../redux/auth/operations.js';
import css from "./UserAuth.module.css";

const UserAuth = () => {
    const dispatch = useAppDispatch();

    return (
        <div className={css.container}>
            <svg width="136" height="16">
                <use href="/sprite.svg#icon-login" >
                </use>
            </svg>
            <button className={css.btn} type="button" onClick={() => dispatch(logOut())}>
                Log out
            </button>
        </div>
    );
};

export default UserAuth;