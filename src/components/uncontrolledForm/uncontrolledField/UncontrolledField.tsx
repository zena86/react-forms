import { UncontrolledFieldProps } from '../../../types';
import InputError from '../../inputError';
import styles from './../../../style.module.scss';

const UncontrolledField = ({
  fieldRef,
  id,
  type,
  text,
  error,
}: UncontrolledFieldProps) => {
  return (
    <div className={styles.field}>
      <label htmlFor={id}>{text}</label>
      <input type={type} id={id} name={id} ref={fieldRef} />
      <InputError msg={error} />
    </div>
  );
};

export default UncontrolledField;
