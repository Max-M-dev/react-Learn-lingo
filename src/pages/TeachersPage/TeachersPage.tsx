
import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeachers } from '../../redux/teachers/operations.js'
import { selectError, selectIsLoading } from '../../redux/teachers/selectors.js';
import { AppDispatch } from '../../redux/store.js';

import { RootState } from '../../redux/store.js';

import TeachersList from '../../components/TeachersList/TeachersList'
import Filters from '../../components/Filters/Filters'
import css from './TeachersPage.module.css'

export default function TeachersPage() {
    const dispatch = useDispatch<AppDispatch>();

    const error = useSelector(selectError);
    const isLoading = useSelector(selectIsLoading);

    const [page, setPage] = useState(1);
    const limit = 5;

    const filters = useSelector((state: RootState) => state.filters);

    const performSearch = useCallback(() => {
        setPage(1);
        dispatch(fetchTeachers({ page: 1, limit, filters }));
    }, [dispatch, limit, filters]);

    useEffect(() => {
        dispatch(fetchTeachers({ page, limit, filters }));
    }, [dispatch, page, filters]);


    const handleLoadMore = () => {
        setPage(prevPage => prevPage + 1);
    };

    return (
        <main className={css.container}>
            {isLoading && <p>Loading teachers...</p>}
            {error && <p>{error}</p>}
            <div className={css.wrapper}>
                <Filters onSearch={performSearch} />
                <TeachersList load={handleLoadMore} />
            </div>
        </main>
    )
}