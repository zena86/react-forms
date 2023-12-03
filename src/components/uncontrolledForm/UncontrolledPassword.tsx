import { useState } from 'react';
import { UncontrolledPasswordProps } from '../../types';
import InputError from '../inputError/InputError';
import styles from './../../style.module.scss';
import { calcStrength } from '../../utils/calcStrength';

const UncontrolledPassword = ({
  passwordRef,
  confirmPasswordRef,
  passwordError,
  confirmPasswordError,
}: UncontrolledPasswordProps) => {
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
          ref={passwordRef}
          onChange={(e) => handlePasswordChange(e.target.value)}
        />
        <progress
          id="progress"
          max="100"
          value={strength.toString()}
        ></progress>
        <InputError msg={passwordError} />
      </div>

      <div className={styles.field}>
        <label htmlFor="confirmPassword">Confirm password</label>
        <input type="password" id="confirmPassword" ref={confirmPasswordRef} />
        <InputError msg={confirmPasswordError} />
      </div>
    </>
  );
};

export default UncontrolledPassword;
