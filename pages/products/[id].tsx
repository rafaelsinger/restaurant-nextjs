import styles from '../../styles/Product.module.css';
import { NextPage } from 'next';
import Image from 'next/image';

const Product: NextPage = ()  => {

    const pizza = {
        id: 1,
        img: '/images/pizza.png',
        name: 'CAMPAGNOLA',
        price: [19.9, 23.9, 27.9],
        desc: 'Lorum Ipsum'
    }
  return (
    <div className={styles.container}>
        awaddwad
    </div>
  )
}

export default Product