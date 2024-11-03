
import { useAppDispatch } from '../../redux/store';
import { register } from '../../redux/auth/operations';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import css from './RegistrationForm.module.css';

interface FormValues {
    name: string;
    email: string;
    password: string;
}

interface RegisterFormProps {
    onClose: () => void;
}

export const RegistrationForm: React.FC<RegisterFormProps> = ({onClose}) => {
    const dispatch = useAppDispatch();

    const Validator = Yup.object().shape({
        name: Yup.string().min(3).max(15).required("Required!"),
        email: Yup.string().email("Invalid email address!").required("Required!"),
        password: Yup.string().required("Required!"),
    })

    const initialValues = {
        name: "",
        email: "",
        password: "",
    };

    const handleSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
        dispatch(register(values));
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
                    <h2 className={css.title}>Registration</h2>
                    <p className={css.text}>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.</p>
                    <div className={css.container}>

                        <Field className={css.input} type="text" name="name" autoComplete="true" placeholder="Name" />
                        <ErrorMessage className={css.error} name="name" component="div" />

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
                    <button className={css.btn} type="submit">Sign up</button>
                </Form>
            </Formik>
        </div>
        
    );
}
