
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from '../../redux/contacts/operations.js'
// import { selectError, selectIsLoading } from '../../redux/contacts/selectors.js';

import TeachersList from '../../components/TeachersList/TeachersList'
// import ContactForm from '../../components/ContactForm/ContactForm.jsx';
import Filters from '../../components/Filters/Filters'
import css from './TeachersPage.module.css'

export default function TeachersPage() {
    // const dispatch = useDispatch();

    // const error = useSelector(selectError);
    // const isLoading = useSelector(selectIsLoading);

    // useEffect(() => {
    //     dispatch(fetchContacts());
    // }, [dispatch]);

    return (
        <main className={css.container}>
            {/* {isLoading && <p>Loading contacts...</p>}
            {error && <p>{error}</p>} */}
            <div className={css.wrapper}>
                <Filters/>
                <TeachersList />
            </div>
        </main>
    )
}