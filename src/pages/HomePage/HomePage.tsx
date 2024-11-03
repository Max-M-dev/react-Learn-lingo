
import css from './HomePage.module.css';

interface HomePageProps {
    onRegisterClick: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onRegisterClick})  => {
    return (
        <main className={css.home} >
            <div className={css.container}>
                <div className={css.box}>
                    <div className={css.wrapper}>
                        <h1 className={css.title}>Unlock your potential with the best  <span className={css.special}>language</span> tutors</h1>
                        <p className={css.text}>Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</p>
                        <button className={css.btn} onClick={onRegisterClick}>Get started</button>
                    </div>
                    <div className={css.picture}>
                        <img srcSet="./images/hero.png 1x, ./images/hero@2x.png 2x" src="./images/hero.png" alt="Girl with a laptop" />
                    </div>
                </div>
                <div className={css.bottom}>
                    <ul className={css.list}>
                        <li className={css.item}>
                            <p className={css.number}>32,000 +</p>
                            <p className={css.value}>Experienced tutors</p>
                        </li>
                        <li className={css.item}>
                            <p className={css.number}>300,000 +</p>
                            <p className={css.value}>5-star tutor reviews</p>
                        </li>
                        <li className={css.item}>
                            <p className={css.number}>120 +</p>
                            <p className={css.value}>Subjects taught</p>
                        </li>
                        <li className={css.item}>
                            <p className={css.number}>200 +</p>
                            <p className={css.value}>Tutor nationalities</p>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default HomePage