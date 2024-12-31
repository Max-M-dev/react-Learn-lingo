import Teacher from '../Teacher/Teacher';

import { useSelector } from 'react-redux';
import { selectLimit, selectPage } from '../../redux/teachers/selectors';
import css from './TeachersList.module.css';
import { useAppDispatch } from '../../redux/store';
import { changePage, Teacher as TeacherType } from '../../redux/teachers/slice';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { getTeacherKey } from '../../redux/favourites/selectors';
export type TeacherListProps = {
  list: TeacherType[];
};
const TeachersList: React.FC<TeacherListProps> = ({ list }) => {
  const dispatch = useAppDispatch();
  const isUserAuth = useSelector(selectIsLoggedIn);

  const teachersFull = list;

  const currentPage = useSelector(selectPage);
  const limitView = useSelector(selectLimit);
  const quantityPreviewEntries = currentPage * limitView;

  const teachers =
    quantityPreviewEntries <= teachersFull.length
      ? teachersFull.slice(0, quantityPreviewEntries)
      : teachersFull;

  const isShowBtnMore = quantityPreviewEntries < teachersFull.length;
  const handleClickMore = () => {
    dispatch(changePage(currentPage + 1));
  };

  return (
    <div className={css.container}>
      {teachers.length === 0 ? (
        <p>No teachers found</p>
      ) : (
        <ul>
          {teachers.map(teacher => (
            <li key={getTeacherKey(teacher)}>
              <Teacher teacher={teacher} isUserAuth={isUserAuth} />
            </li>
          ))}
        </ul>
      )}
      {isShowBtnMore && (
        <button className={css.more} onClick={handleClickMore} type="button">
          Load more
        </button>
      )}
    </div>
  );
};

export default TeachersList;
