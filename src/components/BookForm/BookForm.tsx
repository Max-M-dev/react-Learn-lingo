
import * as Yup from "yup";
import css from './BookForm.module.css'
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";


type FormData = {
    name: string;
    email: string;
    number: string;
    reason: string;
};

const BookForm = () => {

    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "It`s too short").max(50, "It`s too long!").required("Required!"),
        email: Yup.string().email("Invalid email!").required("Required!"),
        number: Yup.string().required("Required!"),
        reason: Yup.string().required("Choose a reason!"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
    };


    return (
        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
            <svg width="32" height="32" className={css.icon}>
                <use href="./images/sprite.svg#icon-close" >
                </use>
            </svg>
            <div className={css.wrapper}>
                <h2 className={css.title}>Book trial lesson</h2>
                <p className={css.text}>Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs.</p>
                <div className={css.teacher}>
                    <img className={css.image} src="./images/logo.png" alt="Logo" />
                    <div>
                        <p className={css.paragraph}>Your teacher</p>
                        <h4 className={css.name}>Jane Smith</h4>
                    </div>
                </div>
                <div className={css.radiobox}>
                    <label className={css.label}>What is your main reason for learning English?</label>
                    <div>
                        <input className={css.radio} type="radio" value="career" {...register("reason")} id="career" />
                        <label className={css.option} htmlFor="career">Career and business</label>
                    </div>
                    <div>
                        <input className={css.radio} type="radio" value="kids" {...register("reason")} id="kids" />
                        <label className={css.option} htmlFor="kids">Lesson for kids</label>
                    </div>
                    <div>
                        <input className={css.radio} type="radio" value="abroad" {...register("reason")} id="abroad" />
                        <label className={css.option} htmlFor="abroad">Living abroad</label>
                    </div>
                    <div>
                        <input className={css.radio} type="radio" value="exams" {...register("reason")} id="exams" />
                        <label className={css.option} htmlFor="exams">Exams and coursework</label>
                    </div>
                    <div>
                        <input className={css.radio} type="radio" value="hobby" {...register("reason")} id="hobby" />
                        <label className={css.option} htmlFor="hobby">Culture, travel or hobby</label>
                    </div>
                    {errors.reason && <p>{errors.reason.message}</p>}
                </div>
                <div>
                    <div className={css.item}>
                        <input className={css.input} {...register("name")} placeholder="Full name" />
                        {errors.name && <p>{errors.name.message}</p>}
                    </div>
                    <div className={css.item}>
                        <input className={css.input} {...register("email")} placeholder="Email" />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                    <div className={css.item}>
                        <input className={css.input} {...register("number")} placeholder="Phone number" />
                        {errors.number && <p>{errors.number.message}</p>}
                    </div>
                    <button className={css.btn} type="submit">Book</button>
                </div>
            </div>
        </form >
    );
};

export default BookForm;