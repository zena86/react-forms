import { Gender, UncontrolledGenderProps } from '../../../types';
import styles from './../../../style.module.scss';

const UncontrolledGender = ({ genderRef }: UncontrolledGenderProps) => {
  return (
    <div className={styles.field}>
      <label htmlFor="gender">Gender</label>
      <div className={styles['custom-select']}>
        <select id="gender" ref={genderRef}>
          {Object.values(Gender).map((gender) => {
            return (
              <option key={gender} value={gender}>
                {gender}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default UncontrolledGender;
