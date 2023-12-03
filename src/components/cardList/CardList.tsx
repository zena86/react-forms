import { useAppSelector } from '../../redux/hooks';
import Card from '../card/Card';
import styles from './style.module.scss';

const CardList = () => {
  const formData = useAppSelector((state) => state.form.formData);
  const cards = formData.map((card) => (
    <li key={card.id}>
      <Card person={card} />
    </li>
  ));

  return <ul className={styles.list}>{cards}</ul>;
};

export default CardList;
