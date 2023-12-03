import styles from './../../pages/reactHookForm/style.module.scss';

interface InputErrorProps {
  msg?: string;
}

const InputError = ({ msg }: InputErrorProps) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.error}>{msg}</p>
    </div>
  );
};

export default InputError;
