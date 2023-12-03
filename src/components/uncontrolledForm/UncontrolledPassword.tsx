import { UncontrolledProps } from '../../types';
import InputError from '../inputError/InputError';
import styles from './../../../style.module.scss';

const UncontrolledPassword = ({ref, error}: UncontrolledProps) => {
  return (
    <>
      <div className={styles.field}>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={ref} />
        <InputError msg={error} />
      </div>

      <div className={styles.field}>
        <label htmlFor="confirmPassword">Confirm password</label>
        <input type="password" id="confirmPassword" ref={confirmPasswordRef} />
        <InputError msg={confirmPasswordErrorMsg} />
      </div>
    </>
  );
};

export default UncontrolledPassword;
