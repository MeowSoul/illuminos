import React from 'react';
import styles from './mainGenres.module.css'
const MainGenres = () => {
    return (
        <div className={styles.genres}>
            <div className={styles.genres__choice}>
                <div className={styles.genres__title}>Что вам может понравиться</div>
                <div>
                    <select className={styles.genres__select}>
                        <option value="Одному">Одному</option>
                        <option value="Вместе с половинкой">Вместе с половинкой</option>
                        <option value="Всей семьёй">Всей семьёй</option>
                    </select>
                </div>
                <div>
                    <select className={styles.genres__select}>
                        <option value="Ужас">Ужас</option>
                        <option value="Комендия">Комендия</option>
                        <option value="Драмма">Драмма</option>
                        <option value="Романтика">Романтика</option>
                    </select>
                </div>
            </div>
            <div className={styles.genres__result}>
                <img src="" alt="" className={styles.genres__result_item}/>
                <img src="" alt="" className={styles.genres__result_item}/>
                <img src="" alt="" className={styles.genres__result_item}/>
                <img src="" alt="" className={styles.genres__result_item}/>
            </div>
        </div>
    );
};

export default MainGenres;