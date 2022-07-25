import styles from '../../styles/Order.module.css';
import Image from 'next/image';

const Order = () => {

    const status = 0;

    const statusClass = (index: number) => {
        if(index-status < 1) return styles.done
        if(index-status === 1) return styles.inProgress
        if(index-status > 1) return styles.notDone
    }

  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.row}>
            <table className={styles.table}>
                <thead className={styles.trTitle}>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Address</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={styles.tr}>
                        <td>
                            <span className={styles.id}>6127983</span>
                        </td>
                        <td>
                            <span className={styles.name}>
                                John Doe
                            </span>    
                        </td>
                        <td>
                            <span className={styles.address}>100 Perry St</span>
                        </td>
                        <td>
                            <span className={styles.total}>$39.80</span>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div className={styles.row}>
                <div className={statusClass(0)}>
                    <Image src='/images/paid.png' height='30' width='30' alt='status icon' />
                    <span>Payment</span>
                    <div className={styles.checkedIcon}>
                        <Image src='/images/checked.png' className={styles.checked} height='20' width='20' alt='checked' />
                    </div>
                </div>
                <div className={statusClass(1)}>
                    <Image src='/images/bake.png' height='30' width='30' alt='status icon' />
                    <span>Preparing</span>
                    <div className={styles.checkedIcon}>
                        <Image src='/images/checked.png' className={styles.checked} height='20' width='20' alt='checked' />
                    </div>
                </div>
                <div className={statusClass(2)}>
                    <Image src='/images/bike.png' height='30' width='30' alt='status icon' />
                    <span>On the way</span>
                    <div className={styles.checkedIcon}>
                        <Image src='/images/checked.png' className={styles.checked} height='20' width='20' alt='checked' />
                    </div>
                </div>
                <div className={statusClass(3)}>
                    <Image src='/images/delivered.png' height='30' width='30' alt='status icon' />
                    <span>Delivered</span>
                    <div className={styles.checkedIcon}>
                        <Image src='/images/checked.png' className={styles.checked} height='20' width='20' alt='checked' />
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.right}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>CART TOTAL</h2>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Discount:</b>$0.00
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Total:</b>$79.60
                </div>
                <button disabled className={styles.button}>PAID</button>
            </div>
        </div>
    </div>
  )
}

export default Order