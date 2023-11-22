import React from 'react';
import styles from './choose.module.css'

const Choose = () => {
    function chooseSeasons() {
        alert("В разработке")
    }
    return (
        <div className={styles.main}>
            <div>
                <div></div>
                <div onClick={chooseSeasons}>

                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Choose;