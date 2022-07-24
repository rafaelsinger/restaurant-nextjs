import { useState } from 'react';
import styles from '../styles/Featured.module.css'
import Image from 'next/image';

const Featured = () => {
  const [index, setIndex] = useState(0);

  const images = [
    '/images/featured.jpg',
    '/images/featured2.jpg',
    '/images/featured3.jpg',
  ];

  return (
    <div className={styles.container}>
        <div className={styles.arrowContainer} style={{left: 0}}>
            <Image src='/images/arrowl.png' alt='arrow left' layout='fill' />
        </div>
        <div className={styles.wrapper}>
                {images.map( (img, i) => (
                    <div className={styles.imgContainer} key={i}>
                        <Image src={img} alt='featured image' layout='fill' objectFit='contain'/>
                    </div>
                ))}
        </div>
        <div className={styles.arrowContainer} style={{right: 0}}>
            <Image src='/images/arrowr.png' alt='arrow right' layout='fill' />
        </div>
    </div>
  )
}

export default Featured