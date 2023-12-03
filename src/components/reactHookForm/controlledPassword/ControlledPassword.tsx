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

  // const calcStrength = (password: string) => {
  //   let val = 0;
  //   if (password.match(/[a-z]/)) {
  //     val += 25;
  //   }
  //   if (password.match(/[A-Z]/)) {
  //     val += 25;
  //   }
  //   if (password.match(/[@$!%*#?&]+/)) {
  //     val += 25;
  //   }
  //   if (password.match(/\d+/)) {
  //     val += 25;
  //   }
  //   return val;
  // };

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
