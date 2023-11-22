import React from "react"
import styles from "./description.module.css"

const Description = ({ descriptionText }) => {
    return (
        <div className={styles.main}>
            <div>Описание</div>
            {descriptionText}
        </div>
    )
}

export default Description
