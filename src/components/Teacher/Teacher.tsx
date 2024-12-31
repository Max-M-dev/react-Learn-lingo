import css from './Teacher.module.css';

import React, { useState, useEffect } from 'react';
import Coments from '../Coments/Coments';
import BookForm from '../BookForm/BookForm';
import { Teacher as TeacherInformation } from '../../redux/teachers/slice';
import { Modal } from '../Modal/Modal';
import { RegistrationForm } from '../RegistrationForm/RegistrationForm';
import { useAppDispatch } from '../../redux/store';
import { toggleFavourite } from '../../redux/favourites/slice';

export interface TeacherProps {
  teacher: TeacherInformation & { isFavourites?: boolean };
  isUserAuth?: boolean;
  onClose?: () => void;
}

const Teacher: React.FC<TeacherProps> = ({ teacher, isUserAuth = false }) => {
  const levels = teacher.levels;

  const dispatch = useAppDispatch();
  const isFavouriteProps = teacher?.isFavourites;
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [isComentsOpen, setIsComentsOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleComents = () => {
    setIsComentsOpen(prev => !prev);
  };

  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeForm();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const handleClickFavourite = () => {
    if (isUserAuth) {
      dispatch(toggleFavourite(teacher));
    } else {
      setIsOpenModal(() => true);
    }
  };

  return (
    <div>
      <div className={css.container}>
        <div className={css.box}>
          <img className={css.image} src={teacher.avatar_url} alt="Logo" />
        </div>
        <div className={css.wrapper}>
          <div className={css.top}>
            <div className={css.title}>
              <p className={css.grey}>Languages</p>
              <h3 className={css.name}>
                {teacher.name} {teacher.surname}
              </h3>
            </div>
            <div className={css.info}>
              <ul className={css.list}>
                <li className={css.item}>
                  <svg width="16" height="16" className={css.book}>
                    <use href="./images/sprite.svg#icon-book"></use>
                  </svg>
                </li>
                <span className={css.decor}>
                  <li className={css.item}>
                    <p className={css.text}>Lessons online</p>
                  </li>
                </span>
                <span className={css.decor}>
                  <li className={css.item}>
                    <p className={css.text}>
                      Lessons done: {teacher.lessons_done}
                    </p>
                  </li>
                </span>
                <span className={css.decor}>
                  <li className={css.item}>
                    <svg width="18" height="18" className={css.star}>
                      <use href="./images/sprite.svg#icon-star"></use>
                    </svg>
                    <p className={css.text}>Rating: {teacher.rating}</p>
                  </li>
                </span>
                <li className={css.item}>
                  <p className={css.text}>
                    Price / 1 hour:{' '}
                    <span className={css.dollar}>
                      {teacher.price_per_hour}$
                    </span>{' '}
                  </p>
                </li>
              </ul>
              <svg
                onClick={handleClickFavourite}
                width="26"
                height="26"
                className={isFavouriteProps ? css.heartActive : css.heart}
              >
                <use href="./images/sprite.svg#icon-heart"></use>
              </svg>
            </div>
          </div>
          <ul className={css.middle}>
            <li className={css.li}>
              <p className={css.grey}>Speaks:</p>
              <p className={css.lang}>
                {teacher.languages?.join(', ') || 'No languages'}
              </p>
            </li>
            <li className={css.li}>
              <p className={css.grey}>Lesson Info:</p>
              <p className={css.text}>{teacher.lesson_info}</p>
            </li>
            <li className={css.li}>
              <p className={css.grey}>Conditions:</p>
              <p className={css.text}>{teacher.conditions}</p>
            </li>
          </ul>
          <button onClick={toggleComents} className={css.btn}>
            {' '}
            {isComentsOpen ? '' : 'Read more'}
          </button>
          {isComentsOpen && <Coments teacher={teacher} />}
          <ul className={css.bottom}>
            {levels?.map((level, index) => (
              <li key={index} className={css.level}>
                <p className={css.paragraph}>#{level}</p>
              </li>
            ))}
          </ul>
          {isComentsOpen && (
            <button className={css.trial} onClick={openForm}>
              Book trial lesson
            </button>
          )}
        </div>
      </div>
      {isOpen && (
        <Modal isShowCloseBtn={true} onClose={closeForm}>
          <BookForm teacher={teacher} onClose={closeForm} />
        </Modal>
      )}
      {isOpenModal && (
        <Modal
          onClose={() => setIsOpenModal(() => false)}
          isShowCloseBtn={true}
        >
          <RegistrationForm onClose={() => setIsOpenModal(() => false)} />
        </Modal>
      )}
    </div>
  );
};

export default Teacher;
