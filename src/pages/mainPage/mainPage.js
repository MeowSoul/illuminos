import React from 'react';
import Header from '../../componets/header/header'
import styles from  './mainPage.module.css'

const MainPage = () => {
    return (
        <div className={styles.wrapper}>
            <Header/>
        </div>
    );
};

export default MainPage;