

import Teacher from '../Teacher/Teacher'

import { useSelector } from "react-redux";
import { selectFilteredTeachers } from '../../redux/teachers/selectors';
import css from './TeachersList.module.css'

import BookForm from '../BookForm/BookForm';

interface TeachersListProps {
    load: () => void;
}

const TeachersList: React.FC<TeachersListProps> = ({ load }) =>  {

    const teachers = useSelector(selectFilteredTeachers);

    return (
        <div className={css.container}>
            {teachers.length === 0 ? (
                <p>No teachers found</p>
            ) : (
                <ul>
                    {teachers.map(teacher => (
                        <li key={teacher.id}>
                            <Teacher teacher={teacher} />
                        </li>
                    ))}
                </ul>)}
            <button className={css.more} onClick={load} type="button">Load more</button>
            <BookForm/>
        </div>
    )
}

export default TeachersList
