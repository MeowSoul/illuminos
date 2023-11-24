import React, { useState } from "react"
import styles from "./mainFilter.module.css"

const MainFilter = () => {
    const [withWhom] = useState(["Одному", "Вместе с половинкой", "Всей семьёй"])
    const [whatSee] = useState(["Ужас", "Комендия", "Драмма"])

    const howToWatch = withWhom.map((element, index) => {
        return <option key={index}>{element}</option>
    })
    const whatToWatch = whatSee.map((element, index) => {
        return <option key={index}>{element}</option>
    })

    return (
        <div className={styles.genres}>
            <div className={styles.genres__choice}>
                <div className={styles.genres__title}>Что вам может понравиться</div>
                <div>
                    <select className={styles.genres__select}>{howToWatch}</select>
                </div>
                <div>
                    <select className={styles.genres__select}>{whatToWatch}</select>
                </div>
            </div>
            <div className={styles.genres__result}>
                <img src="" alt="" className={styles.genres__result_item} />
                <img src="" alt="" className={styles.genres__result_item} />
                <img src="" alt="" className={styles.genres__result_item} />
                <img src="" alt="" className={styles.genres__result_item} />
            </div>
        </div>
    )
}

export default MainFilter
