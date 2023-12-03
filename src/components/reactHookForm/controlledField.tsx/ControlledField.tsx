import { ControlledFieldProps } from '../../../types';
import styles from './../../../pages/reactHookForm/style.module.scss';

const ControlledField = ({
  registerField,
  type,
  id,
  text,
  error,
}: ControlledFieldProps) => {
  return (
    <div className={styles.field}>
      <label htmlFor={id}>{text}</label>
      <input type={type} id={id} {...registerField} />
      <div className={styles.wrapper}>
        <p className={styles.error}>{error}</p>
      </div>
    </div>
  );
};

export default ControlledField;
