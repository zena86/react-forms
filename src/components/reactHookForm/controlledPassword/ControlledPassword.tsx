import { useState } from 'react';
import { CountrySelectorProps } from '../../../types';
import styles from './../../../pages/reactHookForm/style.module.scss';
import InputError from '../../inputError';

const ControlledPassword = ({ form }: CountrySelectorProps) => {
  const {
    // getValues,
    // setValue,
    register,
    formState: { errors },
  } = form;

  const [strength, setStrength] = useState(0);

  const calcStrength = (password: string) => {
    console.log('checkStrength');
    let val = 0;
    if (password.match(/[a-z]/)) {
      val += 25;
    }
    if (password.match(/[A-Z]/)) {
      val += 25;
    }
    if (password.match(/[@$!%*#?&]+/)) {
      val += 25;
    }
    if (password.match(/\d+/)) {
      val += 25;
    }
    return val;
  };

  const handlePasswordChange = (password: string) => {
    console.log('change password');
    setStrength(calcStrength(password));
  };

  return (
    <>
      <div className={styles.field}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          {...register('password')}
          onChange={(e) => handlePasswordChange(e.target.value)}
        />
        <InputError msg={errors.password?.message} />
        {/* <div className={styles.wrapper}>
          <p className={styles.error}>{errors.password?.message}</p>
        </div> */}
      </div>

      <label htmlFor="progress">Strength:</label>
      <progress id="progress" max="100" value={strength.toString()}></progress>

      <div className={styles.field}>
        <label htmlFor="confirm_password">Confirm password</label>
        <input
          type="password"
          id="confirm_password"
          {...register('confirmPassword')}
        />
        <InputError msg={errors.confirmPassword?.message} />
        {/* <div className={styles.wrapper}>
          <p className={styles.error}>{errors.confirmPassword?.message}</p>
        </div> */}
      </div>
    </>
  );
};

export default ControlledPassword;
