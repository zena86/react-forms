import { ControlledProps } from '../../../types';
import InputError from '../../inputError/InputError';
import styles from './../../../style.module.scss';
const ControlledConditionsAccepted = ({ form }: ControlledProps) => {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <>
      <div className={styles.row}>
        <input
          type="checkbox"
          id="conditionsAccepted"
          className={styles['ui-checkbox']}
          {...register('conditionsAccepted')}
        />
        <label htmlFor="conditionsAccepted">
          I agree to the terms and conditions
        </label>
      </div>
      <InputError msg={errors.conditionsAccepted?.message} />
    </>
  );
};

export default ControlledConditionsAccepted;
