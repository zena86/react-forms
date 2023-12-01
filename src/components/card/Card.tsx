// import { useAppSelector } from '../../redux/hooks';
import { useEffect, useState } from 'react';
import styles from './style.module.scss';
import { PersonProps } from './type';
import { useAppDispatch } from '../../redux/hooks';
import { inactiveCards } from '../../redux/features/formSlice';
import { store } from '../../redux/store';

const Card = ({ person }: PersonProps) => {
  const dispatch = useAppDispatch();
  const [isActive, setIsActive] = useState(person.isActive);

  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        setIsActive(false);
        dispatch(inactiveCards());
      }, 3000);
    }
  }, [dispatch, isActive]);

  return (
    <figure
      className={
        isActive ? `${styles.card} ${styles.active}` : `${styles.card}`
      }
    >
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
