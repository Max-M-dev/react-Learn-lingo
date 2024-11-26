
import * as Yup from "yup";
import css from './BookForm.module.css'
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { TeacherProps } from "../Teacher/Teacher";


type FormData = {
    name: string;
    email: string;
    number: string;
    reason: string;
};

const BookForm: React.FC<TeacherProps> = ({teacher, onClose}) => {

    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "It`s too short").max(50, "It`s too long!").required("Required!"),
        email: Yup.string().email("Invalid email!").required("Required!"),
        number: Yup.string().min(9, "It`s too short").max(15, "It`s too long!").required("Required!"),
        reason: Yup.string().required("Choose a reason!"),
    });

    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
        reset();
        onClose();
    };


    return (
        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
            <button type="button" onClick={onClose} className={css.close}>
                <svg width="32" height="32" className={css.icon}>
                    <use href="./images/sprite.svg#icon-close" >
                    </use>
                </svg>
            </button>
            <div className={css.wrapper}>
                <h2 className={css.title}>Book trial lesson</h2>
                <p className={css.text}>Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs.</p>
                <div className={css.teacher}>
                    <img className={css.image} src={teacher.avatar_url} alt="Logo" />
                    <div>
                        <p className={css.paragraph}>Your teacher</p>
                        <h4 className={css.name}>{teacher.name} {teacher.surname}</h4>
                    </div>
                </div>
                <div className={css.radiobox}>
                    <p className={css.label}>What is your main reason for learning English?</p>
                    <div className={css.div}>
                        <input className={css.radio} type="radio" value="career" {...register("reason")} id="career" />
                        <label className={css.option} htmlFor="career">Career and business</label>
                    </div>
                    <div className={css.div}>
                        <input className={css.radio} type="radio" value="kids" {...register("reason")} id="kids" />
                        <label className={css.option} htmlFor="kids">Lesson for kids</label>
                    </div>
                    <div className={css.div}>
                        <input className={css.radio} type="radio" value="abroad" {...register("reason")} id="abroad" />
                        <label className={css.option} htmlFor="abroad">Living abroad</label>
                    </div>
                    <div className={css.div}>
                        <input className={css.radio} type="radio" value="exams" {...register("reason")} id="exams" />
                        <label className={css.option} htmlFor="exams">Exams and coursework</label>
                    </div>
                    <div className={css.div}>
                        <input className={css.radio} type="radio" value="hobby" {...register("reason")} id="hobby" />
                        <label className={css.option} htmlFor="hobby">Culture, travel or hobby</label>
                    </div>
                    {errors.reason && <p className={css.error}>{errors.reason.message}</p>}
                </div>
                <div>
                    <div className={css.item}>
                        <input className={css.input} {...register("name")} placeholder="Full name" />
                        {errors.name && <p className={css.error}>{errors.name.message}</p>}
                    </div>
                    <div className={css.item}>
                        <input className={css.input} {...register("email")} placeholder="Email" />
                        {errors.email && <p className={css.error}>{errors.email.message}</p>}
                    </div>
                    <div className={css.item}>
                        <input className={css.input} {...register("number")} placeholder="Phone number" />
                        {errors.number && <p className={css.error}>{errors.number.message}</p>}
                    </div>
                    <button className={css.btn} type="submit">Book</button>
                </div>
            </div>
        </form >
    );
};

export default BookForm;