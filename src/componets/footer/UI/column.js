import React from "react"
import styles from "./column.module.css"

const Column = ({ columnTitle, columnItem }) => {
    return (
        <div className={styles.main}>
            <div className={styles.title}>{columnTitle}</div>
            <div className={styles.item}>{columnItem}</div>
            <div className={styles.item}>{columnItem}</div>
            <div className={styles.item}>{columnItem}</div>
        </div>
    )
}

export default Column
