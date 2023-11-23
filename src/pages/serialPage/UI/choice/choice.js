import React from "react"
import styles from "./choice.module.css"

const Choice = ({ nameChoise }) => {
    function choiceSeasons() {
        alert("В разработке")
    }

    return (
        <div className={styles.main}>
            <div className={styles.choice}>
                <div className={styles.title}>{nameChoise}</div>
                <div className={styles.items}>
                    <div className={styles.item} onClick={choiceSeasons}>
                        1
                    </div>
                    <div className={styles.item}>2</div>
                    <div className={styles.item}>3</div>
                    <div className={styles.item}>4</div>
                    <div className={styles.item}>5</div>
                    <div className={styles.item}>6</div>
                    <div className={styles.item}>7</div>
                    <div className={styles.item}>8</div>
                </div>
            </div>
        </div>
    )
}

export default Choice
