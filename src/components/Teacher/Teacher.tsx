
import css from './Teacher.module.css'

const Teacher = () => {
    return (
        <div className={css.container}>
            <div className={css.box}>
                <img className={css.image} srcSet="./images/logo.png 1x, ./images/logo@2x.png 2x" src="./images/logo.png" alt="Logo" />
            </div>
            <div className={css.wrapper}>
                <div className={css.top}>
                    <div className={css.title}>
                        <p className={css.grey}>Languages</p>
                        <h3 className={css.name}>Jane Smith</h3>
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
                                    <p className={css.text}>Lessons done: 1098</p>
                                </li>
                            </span>
                            <span className={css.decor}>
                                <li className={css.item}>
                                    <svg width="18" height="18" className={css.star}>
                                        <use href="./images/sprite.svg#icon-star" >
                                        </use>
                                    </svg>
                                    <p className={css.text}>Rating: 4.8</p>
                                </li>
                            </span>
                            <li className={css.item}>
                                <p className={css.text}>Price / 1 hour: <span className={css.dollar}>30$</span> </p>
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
                        <p className={css.lang}>German, French</p>
                    </li>
                    <li className={css.li}>
                        <p className={css.grey}>Lesson Info:</p>
                        <p className={css.text}>Lessons are structured to cover grammar, vocabulary, and practical usage of the language.</p>
                    </li>
                    <li className={css.li}>
                        <p className={css.grey}>Conditions:</p>
                        <p className={css.text}>Welcomes both adult learners and teenagers (13 years and above).Provides personalized study plans</p>
                    </li>
                </ul>
                <button type="button" className={css.btn}>Read more</button>
                <ul className={css.bottom}>
                    <li className={css.level}>
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
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Teacher
