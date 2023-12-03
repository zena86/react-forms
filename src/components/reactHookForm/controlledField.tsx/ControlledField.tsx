import { ControlledFieldProps } from '../../../types';
import InputError from '../../inputError';
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
      <InputError msg={error} />
    </div>
  );
};

export default ControlledField;
