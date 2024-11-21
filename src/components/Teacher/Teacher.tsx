
import css from './Teacher.module.css'

import React, { useState } from 'react';
import Coments from '../Coments/Coments';

export interface TeacherProps {
    teacher: {
        id: string;
        avatar_url?: string;
        name: string;
        surname?: string;
        languages?: [];
        lessons_done?: number;
        rating?: number;
        level?: string;
        price_per_hour?: string;
        lesson_info?: string;
        conditions?: string;
        levels?: [];
        experience?: string;
        reviews?: [{
            comment?: string;
            reviewer_name?: string;
            reviewer_rating?: number;
        }];
    };
}

const Teacher: React.FC<TeacherProps> = ({ teacher }) => {
    
    const levels = teacher.levels;

    const [isComentsOpen, setIsComentsOpen] = useState(false);

    const toggleComents = () => {
        setIsComentsOpen((prev) => !prev);
    };

    return (
        <div className={css.container}>
            <div className={css.box}>
                <img className={css.image} src={teacher.avatar_url} alt="Logo" />
            </div>
            <div className={css.wrapper}>
                <div className={css.top}>
                    <div className={css.title}>
                        <p className={css.grey}>Languages</p>
                        <h3 className={css.name}>{teacher.name} {teacher.surname}</h3>
                    </div>
                    <div className={css.info}>
                        <ul className={css.list}>
                            <li className={css.item}>
                                <svg width="16" height="16" className={css.book}>
                                    <use href="./images/sprite.svg#icon-book" >
                                    </use>
                                </svg>
                            </li>
                            <span className={css.decor}>
                                <li className={css.item}>
                                    <p className={css.text}>Lessons online</p>
                                </li>
                            </span>
                            <span className={css.decor}>
                                <li className={css.item}>
                                    <p className={css.text}>Lessons done: {teacher.lessons_done}</p>
                                </li>
                            </span>
                            <span className={css.decor}>
                                <li className={css.item}>
                                    <svg width="18" height="18" className={css.star}>
                                        <use href="./images/sprite.svg#icon-star" >
                                        </use>
                                    </svg>
                                    <p className={css.text}>Rating: {teacher.rating}</p>
                                </li>
                            </span>
                            <li className={css.item}>
                                <p className={css.text}>Price / 1 hour: <span className={css.dollar}>{teacher.price_per_hour}$</span> </p>
                            </li>
                        </ul>
                        <svg width="26" height="26" className={css.heart}>
                            <use href="./images/sprite.svg#icon-heart" >
                            </use>
                        </svg>
                    </div>
                </div>
                <ul className={css.middle}>
                    <li className={css.li}>
                        <p className={css.grey}>Speaks:</p>
                        <p className={css.lang}>{teacher.languages?.join(', ') || 'No languages'}</p>
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
                <button onClick={toggleComents} className={css.btn}> {isComentsOpen ? '' : 'Read more'}</button>
                {isComentsOpen && (
                    <Coments teacher={teacher} />
                )}
                <ul className={css.bottom}>
                    {levels?.map((level, index) => (
                        <li key={index} className={css.level}>
                            <p className={css.paragraph}>#{level}</p>
                        </li>
                    ))}
                </ul>
                {isComentsOpen && (
                    <button className={css.trial}>Book trial lesson</button>
                )}
            </div>
        </div>
    )
}

export default Teacher
