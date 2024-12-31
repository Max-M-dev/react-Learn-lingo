import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import UserWelcome from '../UserWelcome/UserWelcome';
import UserAuth from '../UserAuth/UserAuth';
import { LoginForm } from '../LoginForm/LoginForm';
import { RegistrationForm } from '../RegistrationForm/RegistrationForm';

import css from './AppBar.module.css';
import { Modal } from '../Modal/Modal';

interface AppBarProps {
  onOpenRegister: () => void;
}

const AppBar: React.FC<AppBarProps> = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginOpen(true);
    setIsRegisterOpen(false);
  };

  const openRegisterModal = () => {
    setIsRegisterOpen(true);
    setIsLoginOpen(false);
  };

  const closeModal = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <header className={`${css.head} container`}>
      <Logo />
      <Navigation />
      <div>
        {isLoggedIn ? (
          <UserAuth />
        ) : (
          <UserWelcome
            onLoginClick={openLoginModal}
            onRegisterClick={openRegisterModal}
          />
        )}
      </div>
      {isLoginOpen && (
        <Modal isShowCloseBtn={true} onClose={closeModal}>
          <LoginForm onClose={closeModal} />
        </Modal>
      )}
      {isRegisterOpen && (
        <Modal isShowCloseBtn={true} onClose={closeModal}>
          <RegistrationForm onClose={closeModal} />
        </Modal>
      )}
    </header>
  );
};

export default AppBar;
