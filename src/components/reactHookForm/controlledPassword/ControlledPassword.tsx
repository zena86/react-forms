import { useState } from 'react';
import { ControlledProps } from '../../../types';
import styles from './../../../style.module.scss';
import InputError from '../../inputError';
import { calcStrength } from '../../../utils/calcStrength';

const ControlledPassword = ({ form }: ControlledProps) => {
  const {
    register,
    formState: { errors },
  } = form;

  const [strength, setStrength] = useState(0);

  const handlePasswordChange = (password: string) => {
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
        <progress
          id="progress"
          max="100"
          value={strength.toString()}
        ></progress>
        <InputError msg={errors.password?.message} />
      </div>

      <div className={styles.field}>
        <label htmlFor="confirm_password">Confirm password</label>
        <input
          type="password"
          id="confirm_password"
          {...register('confirmPassword')}
        />
        <InputError msg={errors.confirmPassword?.message} />
      </div>
    </>
  );
};

export default ControlledPassword;
