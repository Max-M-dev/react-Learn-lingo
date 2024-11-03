
import { useAppDispatch } from '../../redux/store';
import { logIn } from '../../redux/auth/operations';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import css from './LoginForm.module.css';

interface FormValues {
    email: string;
    password: string;
}

interface LoginFormProps {
    onClose: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({onClose}) => {
    const dispatch = useAppDispatch();

    const Validator = Yup.object().shape({
        email: Yup.string().email("Invalid email address!").required("Required!"),
        password: Yup.string().required("Required!"),
    })

    const initialValues = {
        email: "",
        password: "",
    };

    const handleSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
        dispatch(logIn(values));
        actions.resetForm();
        onClose();
    };

    const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.currentTarget === event.target) {
            onClose();
        }
    };


    return (
        <div className={`${css.backdrop} ${css.isOpen}`} onClick={handleBackdropClick}>
            <Formik
                initialValues={initialValues}
                validationSchema={Validator}
                onSubmit={handleSubmit}
                >
                <Form className={css.form} >
                    <button type='button' className={css.close} onClick={onClose}>
                        <svg width="32" height="32" className={css.icon}>
                            <use href="./images/sprite.svg#icon-close" >
                            </use>
                        </svg>
                    </button>
                    <h2 className={css.title}>Log In</h2>
                    <p className={css.text}>Welcome back! Please enter your credentials to access your account and continue your search for an teacher.</p>
                    <div className={css.container}>
                        <Field className={css.input} type="text" name="email" autoComplete="true" placeholder="Email" />
                        <ErrorMessage className={css.error} name="email" component="div" />
                        
                        <div className={css.label}>
                            <Field className={css.input} type="text" name="password" autoComplete="true" placeholder="Password"/>
                            <ErrorMessage className={css.error} name="password" component="div" />
                            <button type='button' className={css.open}>
                                <svg width="20" height="20" className={css.eye}>
                                    <use href="./images/sprite.svg#icon-eye" >
                                    </use>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <button className={css.btn} type="submit">Log In</button>
                </Form>
            </Formik>
        </div>
        
    );
}