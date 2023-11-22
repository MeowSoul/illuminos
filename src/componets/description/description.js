import React from "react"
import styles from "./description.module.css"

const Description = ({ descriptionText }) => {
    return (
        <div className={styles.main}>
            <div className={styles.title}>Описание</div>
            {descriptionText}
            <div className={styles.someLike}>
                <div className={styles.someLike_title}>Что вам может понравиться</div>
                <div className={styles.someLike_items}>
                    <img className={styles.someLike_img} src={"/image/8Mini.png"} alt="" />
                    <img className={styles.someLike_img} src={"/image/driveMini.png"} alt="" />
                    <img className={styles.someLike_img} src={"/image/fightclubMini.png"} alt="" />
                    <img className={styles.someLike_img} src={"/image/westworldMini.png"} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Description
