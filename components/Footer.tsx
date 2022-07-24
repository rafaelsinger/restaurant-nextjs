import Image from 'next/image';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src='/image/bg.png' layout='fill' alt='background' />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
             YOU CAN'T GET BETTER THAN THIS!
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            89 Wood Lane
            <br /> Memphis, TN 38106
            <br /> 718-477-3843
          </p>
          <p className={styles.text}>
            6 Blue Spring St.
            <br /> San Jose, CA 95127
            <br /> 561-272-2385
          </p>
          <p className={styles.text}>
            80 Windfall Circle
            <br /> Merrick, NY 11566
            <br /> 208-924-6632
          </p>
          <p className={styles.text}>
            92 Hilldale Street
            <br /> Duluth, GA 30096
            <br /> 719-226-8669
          </p>
        </div>
        <div className={styles.card}></div>
      </div>
    </div>
  )
}

export default Footer