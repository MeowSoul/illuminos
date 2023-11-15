import React from 'react';
import styles from './mainSorting.module.css'
const MainSorting = () => {
    return (
        <div className={styles.sorting}>
            <div className={styles.sorting__genres}>
                <div className={styles.sorting__genres_item}>топ</div>
                <div className={styles.sorting__genres_item}>новинки</div>
                <div className={styles.sorting__genres_item}>драма</div>
                <div className={styles.sorting__genres_item}>комедия</div>
            </div>
            <div className={styles.sorting__result}>
                <img src="" alt="" className={styles.sorting__item}/>
                <img src="" alt="" className={styles.sorting__item}/>
                <img src="" alt="" className={styles.sorting__item}/>
                <img src="" alt="" className={styles.sorting__item}/>
            </div>
        </div>
    );
};

export default MainSorting;