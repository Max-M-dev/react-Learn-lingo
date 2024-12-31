import css from './Filters.module.css';
import { changeFilter, FilterKey } from '../../redux/filters/slice';
import { useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import {
  selectLanguageFilter,
  selectLevelFilter,
  selectPriceFilter,
} from '../../redux/filters/selectors';
import { changePage } from '../../redux/teachers/slice';

const Filters: React.FC = () => {
  const dispatch = useAppDispatch();

  const languagesFilterValueState = useSelector(selectLanguageFilter);
  const levelFilterValueState = useSelector(selectLevelFilter);
  const priceFilterValueState = useSelector(selectPriceFilter);

  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nameFilter = e.target.id as FilterKey;
    dispatch(changePage(1));
    dispatch(changeFilter({ filter: nameFilter, value: e.target.value }));
  };

  return (
    <ul className={css.list}>
      <li className={css.item}>
        <label className={css.label} htmlFor="languages">
          Languages
        </label>
        <select
          className={css.select}
          id="languages"
          value={languagesFilterValueState}
          onChange={handleCategory}
        >
          <option value="french">French</option>
          <option value="english">English</option>
          <option value="german">German</option>
          <option value="ukrainian">Ukrainian</option>
          <option value="polish">Polish</option>
        </select>
      </li>
      <li className={css.item}>
        <label className={css.label} htmlFor="level">
          Level of knowledge
        </label>
        <select
          className={css.select}
          id="level"
          value={levelFilterValueState}
          onChange={handleCategory}
        >
          <option value="beginner">A1 Beginner</option>
          <option value="elementary">A2 Elementary</option>
          <option value="intermediate">B1 Intermediate</option>
          <option value="upper">B2 Upper-Intermediate</option>
          <option value="advanced">C1 Advanced</option>
          <option value="proficient">C2 Proficient</option>
        </select>
      </li>
      <li className={css.item}>
        <label className={css.label} htmlFor="price">
          Price
        </label>
        <select
          className={css.select}
          id="price"
          value={priceFilterValueState}
          onChange={handleCategory}
        >
          <option value="10">10 $</option>
          <option value="20">20 $</option>
          <option value="30">30 $</option>
          <option value="40">40 $</option>
        </select>
      </li>
    </ul>
  );
};

export default Filters;
