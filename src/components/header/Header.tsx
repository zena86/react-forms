import MenuItem from '../menuLink';

const Header = () => {
  return (
    <>
      <div className="container">
        <MenuItem url="/" text="Main" />
        <MenuItem url="/uncontrolled-form" text="Uncontrolled Form" />
        <MenuItem url="/react-hook-form" text="React Hook Form" />
      </div>
    </>
  );
};

export default Header;
