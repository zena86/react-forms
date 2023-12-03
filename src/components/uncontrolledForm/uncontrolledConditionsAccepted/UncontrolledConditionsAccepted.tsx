import { UncontrolledConditionsAcceptedProps } from '../../../types';
import styles from './../../../style.module.scss';

const UncontrolledConditionsAccepted = ({
  conditionsAcceptedRef,
  error,
}: UncontrolledConditionsAcceptedProps) => {
  return (
    <div className={styles.field}>
      <div className={styles.row}>
        <input
          type="checkbox"
          id="conditionsAccepted"
          ref={conditionsAcceptedRef}
          className={styles['ui-checkbox']}
        />
        <label htmlFor="conditionsAccepted">
          I agree to the terms and conditions
        </label>
      </div>
      <div className={styles.wrapper}>
        <p className={styles.error}>{error}</p>
      </div>
    </div>
  );
};

export default UncontrolledConditionsAccepted;
