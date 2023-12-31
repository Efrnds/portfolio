import styles from './box.module.css';
import Link from 'next/link';


export default function Box({title, href}) {
    return (
        <div className={styles.proj}>
            <h1>{title ? title : "Default title"}</h1>
            <div className={styles.middle}>
                <Link className='buttonMiddle' href={href}>visit</Link>
            </div>
        </div>
    );
}