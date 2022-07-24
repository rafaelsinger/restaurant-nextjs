import { useState } from 'react';
import styles from '../styles/Featured.module.css'
import Image from 'next/image';

const Featured = () => {
  const [index, setIndex] = useState(0);

  const images = [
    '/images/featured.png',
    '/images/featured2.png',
    '/images/featured3.png',
  ];

  const handleArrow = (direction: string): void => {
    if (direction==='l'){
        index === 0 ? 
            setIndex(2) : 
            setIndex(prevIndex => prevIndex - 1)
    }
    if (direction==='r'){
        index === 2 ? 
            setIndex(0) : 
            setIndex(prevIndex => prevIndex + 1)
    }
  }

  return (
    <div className={styles.container}>
        <div className={styles.arrowContainer} style={{left: 0}} onClick={() => handleArrow('l')}>
            <Image src='/images/arrowl.png' alt='arrow left' layout='fill' objectFit='contain' />
        </div>
        <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
                {images.map( (img, i) => (
                    <div className={styles.imgContainer} key={i}>
                        <Image src={img} alt='featured image' layout='fill' objectFit='contain'/>
                    </div>
                ))}
        </div>
        <div className={styles.arrowContainer} style={{right: 0}} onClick={() => handleArrow('r')}>
            <Image src='/images/arrowr.png' alt='arrow right' layout='fill' objectFit='contain' />
        </div>
    </div>
  )
}

export default Featured