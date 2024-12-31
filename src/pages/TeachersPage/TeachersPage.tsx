import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeachers } from '../../redux/teachers/operations.js';
import {
  selectError,
  selectFilteredTeachers,
  selectIsLoading,
} from '../../redux/teachers/selectors.js';
import { AppDispatch } from '../../redux/store.js';

import TeachersList from '../../components/TeachersList/TeachersList';
import Filters from '../../components/Filters/Filters';
import css from './TeachersPage.module.css';
import {
  getTeacherKey,
  selectFavoritesState,
} from '../../redux/favourites/selectors.js';
import { Teacher } from '../../redux/teachers/slice.js';
import { TeacherProps } from '../../components/Teacher/Teacher.js';

export default function TeachersPage() {
  const dispatch = useDispatch<AppDispatch>();

  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchTeachers());
  }, []);

  const { favourites: favoriteTeacherList } = useSelector(selectFavoritesState);
  const teachersFromState = useSelector(selectFilteredTeachers);
  const setIsFavoriteTeacher = (teacher: Teacher): TeacherProps['teacher'] => {
    const keyFind = getTeacherKey(teacher);
    const resultFindIndex = favoriteTeacherList.findIndex(
      item => getTeacherKey(item) === keyFind
    );
    return { ...teacher, isFavourites: resultFindIndex > -1 };
  };
  const teachersWithFavorites: TeacherProps['teacher'][] =
    teachersFromState.map(setIsFavoriteTeacher);

  return (
    <main className={css.container}>
      {isLoading && <p>Loading teachers...</p>}
      {error && <p>{error}</p>}
      <div className={css.wrapper}>
        <Filters />
        <TeachersList list={teachersWithFavorites} />
      </div>
    </main>
  );
}
