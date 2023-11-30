import { NavLink } from 'react-router-dom';
import styles from './style.module.scss';

interface MenuLinkProps {
  url: string;
  text: string;
}

const MenuLink = ({ url, text }: MenuLinkProps) => {
  return (
    <NavLink
      to={url}
      className={({ isActive, isPending }) =>
        isPending
          ? `${styles['pending']} ${styles['menu-link']}`
          : isActive
            ? `${styles['active']} ${styles['menu-link']}`
            : styles['menu-link']
      }
    >
      {text}
    </NavLink>
  );
};

export default MenuLink;
