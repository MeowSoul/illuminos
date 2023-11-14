import React from 'react';
import styles from './mainCards.module.css'
const MainCards = () => {
    return (
        <div className={styles.main}>
            <img className={styles.main__img_big} src="" alt=""/>
            <img className={styles.main__img_middle} src="" alt=""/>
            <img className={styles.main__img_small} src="" alt=""/>
        </div>
    );
};

export default MainCards;