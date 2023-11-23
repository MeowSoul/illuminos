import React from "react"
import styles from "./creators.module.css"

const Creators = ({ title }) => {
    function choiceSeasons() {
        alert("В разработке")
    }
    return (
        <div className={styles.main}>
            <div className={styles.title}>{title}</div>
            <div className={styles.choice}>
                <div className={styles.choice_item} onClick={choiceSeasons}></div>
                <div className={styles.choice_item} onClick={choiceSeasons}></div>
                <div className={styles.choice_item} onClick={choiceSeasons}></div>
                <div className={styles.choice_item} onClick={choiceSeasons}></div>
            </div>
        </div>
    )
}

export default Creators
