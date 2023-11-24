import React from "react"
import styles from "./mainCards.module.css"

const MainCards = ({ films }) => {
    return (
        <div className={styles.main}>
            <img className={styles.main__img_big} src={`/image/${films[0].imgName}`} alt="" />
            <img className={styles.main__img_middle} src="" alt="" />
            <img className={styles.main__img_small} src="" alt="" />
        </div>
    )
}

export default MainCards
