import { NavLink } from 'react-router-dom';

const Logo = () => {

    return (
        <NavLink to="/">
            <img srcSet="./images/logo.png 1x, ./images/logo@2x.png 2x" src="./images/logo.png" alt="Logo" />
        </NavLink>
    );
}

export default Logo;
