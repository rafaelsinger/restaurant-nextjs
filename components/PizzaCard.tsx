import Image from 'next/image';
import styles from '../styles/PizzaCard.module.css';

const PizzaCard = () => {
  return (
    <div className={styles.container}>
        <Image src='/images/pizza.png' alt='' width='500' height='500' />
        <h1 className={styles.title}>FIORI DI ZUCCA</h1>
        <span className={styles.price}>$19.90</span>
        <p className={styles.desc}>
            Lorum ipsum blah.
        </p>
    </div>
  )
}

export default PizzaCard