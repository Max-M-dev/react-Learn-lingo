import { useSelector } from 'react-redux';
import TeachersList from '../../components/TeachersList/TeachersList';
import css from './FavoritesPage.module.css';
import { selectFavoritesState } from '../../redux/favourites/selectors';
import { TeacherProps } from '../../components/Teacher/Teacher';
import { Teacher } from '../../redux/teachers/slice';

export default function TeachersPage() {
  const { favourites } = useSelector(selectFavoritesState);
  const setIsFavouritesTeacher = (
    teacher: Teacher
  ): TeacherProps['teacher'] => {
    return { ...teacher, isFavourites: true };
  };
  const favouritesWithPropIsFavourites = favourites.map(setIsFavouritesTeacher);

  return (
    <main className={css.container}>
      <div className={css.wrapper}>
        <TeachersList list={favouritesWithPropIsFavourites} />
      </div>
    </main>
  );
}
