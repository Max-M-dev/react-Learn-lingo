
import css from './Teacher.module.css'

interface TeacherProps {
    teacher: {
        id: string;
        avatar_url: string;
        name: string;
        surname: string;
        languages: [];
        lessons_done: number;
        rating: number;
        level: string;
        price_per_hour: string;
        lesson_info: string;
        conditions: string;
        levels: [];
    };
}



const Teacher: React.FC<TeacherProps> = ({ teacher }) => {
    
    const levels = teacher.levels;

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
                        <p className={css.lang}>{teacher.languages.join(', ')}</p>
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
                <button type="button" className={css.btn}>Read more</button>
                <ul className={css.bottom}>
                    {/* <li className={css.level}>
                        <p className={css.paragraph}>#A1 Beginner</p>
                    </li>
                    <li className={css.level}>
                        <p className={css.paragraph}>#A2 Elementary</p>
                    </li>
                    <li className={css.level}>
                        <p className={css.paragraph}>#B1 Intermediate</p>
                    </li>
                    <li className={css.level}>
                        <p className={css.paragraph}>#B2 Upper-Intermediate</p>
                    </li> */}
                    {levels.map((level, index) => (
                        <li key={index} className={css.level}>
                            <p className={css.paragraph}>#{level}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Teacher
