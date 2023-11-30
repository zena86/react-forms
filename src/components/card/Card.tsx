import { useAppSelector } from '../../redux/hooks';
import styles from './style.module.scss';

const Card = () => {
  const formData = useAppSelector((state) => state.form.formData);

  return (
    <figure className={styles.card}>
      <div className={styles['profile-image']}>
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample47.jpg"
          alt="sample47"
        />
      </div>
      <figcaption>
        <h3>{formData.name}</h3>
        <h4>{formData.email}</h4>
        <p>{formData.gender}</p>
        <p>{formData.age} years old</p>
        <p>{formData.country}</p>
      </figcaption>
    </figure>
  );

  // <>
  //   {!formData ? (
  //     <div>
  //       <h2>{formData.name}</h2>
  //     </div>
  //   ) : (
  //     <h1>No data</h1>
  //   )}
  // </>;
};

export default Card;
