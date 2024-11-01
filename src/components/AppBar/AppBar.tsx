

import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import UserWelcome from '../UserWelcome/UserWelcome';
import UserAuth from '../UserAuth/UserAuth';

import css from './AppBar.module.css';

const AppBar = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <header className={css.head}>
            <Logo />
            <Navigation/>
            <div>{isLoggedIn ? <UserAuth /> : <UserWelcome />}</div>
        </header>
    )
}

export default AppBar