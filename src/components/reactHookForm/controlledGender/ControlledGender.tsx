import { ControlledProps, Gender } from '../../../types';
import styles from './../../../style.module.scss';

const ControlledGender = ({ form }: ControlledProps) => {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className={styles.field}>
      <label htmlFor="gender">Gender</label>
      <div className={styles['custom-select']}>
        <select id="gender" {...register('gender')}>
          {Object.values(Gender).map((gender) => {
            return (
              <option key={gender} value={gender}>
                {gender}
              </option>
            );
          })}
        </select>
      </div>
      <p className={styles.error}>{errors.gender?.message}</p>
    </div>
  );
};

export default ControlledGender;
