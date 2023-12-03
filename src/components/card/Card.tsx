import { useEffect, useState } from 'react';
import styles from './style.module.scss';
import { useAppDispatch } from '../../redux/hooks';
import { inactiveCards } from '../../redux/features/formSlice';
import { PersonProps } from '../../types';

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
        <img src={person.image} alt="sample47" />
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
};

export default Card;
