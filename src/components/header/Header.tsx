import MenuItem from '../menuLink';
import styles from './style.module.scss';

const Header = () => {
  return (
    <>
      <div className="container">
        <div className={styles.menu}>
          <MenuItem url="/" text="Main" />
          <MenuItem url="/uncontrolled-form" text="Uncontrolled Form" />
          <MenuItem url="/react-hook-form" text="React Hook Form" />
        </div>
      </div>
    </>
  );
};

export default Header;
