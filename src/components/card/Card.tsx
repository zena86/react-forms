// import { useAppSelector } from '../../redux/hooks';
import styles from './style.module.scss';
import { PersonProps } from './type';

const Card = ({ person }: PersonProps) => {
  // const formData = useAppSelector((state) => state.form.formData);

  return (
    <figure className={styles.card}>
      <div className={styles['profile-image']}>
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample47.jpg"
          alt="sample47"
        />
      </div>
      <figcaption>
        <h3>{person.name}</h3>
        <p>
          <span>{person.gender}, </span>
          <span>{person.age} years old</span>
        </p>
        <p>{person.country}</p>
        <a href={`mailto:${person.email}`}>{person.email}</a>
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
