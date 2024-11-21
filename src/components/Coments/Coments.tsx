
import { TeacherProps } from '../Teacher/Teacher';

import css from './Coments.module.css'

const Coments = ({teacher}: TeacherProps) => {

    return (
        <div>
            <p>{teacher.experience}</p>
            <ul>
                {teacher.reviews?.map((review, index) => (
                    <li key={index} className={css.review}>
                        <div className={css.top}>
                            <p className={css.name}>{review.reviewer_name}</p>
                            <div className={css.bottom}>
                                <svg width="18" height="18" className={css.star}>
                                    <use href="./images/sprite.svg#icon-star" >
                                    </use>
                                </svg>
                                <p className={css.rating}>{review.reviewer_rating}.0</p>
                            </div>
                        </div>
                            <p className={css.paragraph}>{review.comment}</p>
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default Coments
