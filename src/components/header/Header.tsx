import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <NavLink
        to="/uncontrolled-form"
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >
        Uncontrolled Form
      </NavLink>
      <NavLink
        to="/react-hook-form"
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >
        React Hook Form
      </NavLink>
    </>
  );
};

export default Header;
