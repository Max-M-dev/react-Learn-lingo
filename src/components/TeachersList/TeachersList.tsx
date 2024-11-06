

import Teacher from '../Teacher/Teacher'

// import { useSelector } from "react-redux";
// import { selectFilteredCampers } from "../../redux/campers/selectors.js";

import css from './TeachersList.module.css'

const TeachersList = () => {

    // const campers = useSelector(selectFilteredCampers);

    return (
        <div>
            {/* {campers.length === 0 ? (
                <p>No campers found</p>
            ) : (
                <ul>
                    {campers.map(camper => (
                        <li key={camper.id}>
                            <Vehicle camper={camper} />
                        </li>
                    ))}
                </ul>)} */}
            <Teacher/>
            <button className={css.more} type="button">Load more</button>
        </div>
    )
}

export default TeachersList
