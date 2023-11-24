import React from "react"
import styles from "./banner.module.css"

const Banner = ({
    bannerName,
    logoMovieName,
    ratingMovie,
    yearMovie,
    genreMovie,
    timeMovie,
    languageMovie,
    ageMovie,
}) => {
    return (
        <div className={styles.main} style={{ backgroundImage: `url("/image/${bannerName}")` }}>
            <div className={styles.gradient}>
                <div className={styles.information}>
                    <img src={`/image/${logoMovieName}`} alt="" className={styles.logo} />
                    <div className={styles.general__information}>
                        <div>{ratingMovie}</div>
                        <div>{yearMovie}</div>
                        <div>{genreMovie}</div>
                        <div>{timeMovie}</div>
                        <div>{languageMovie}</div>
                        <div>{ageMovie}+</div>
                    </div>
                    <div className={styles.funFact}>За этот фильм Квентин Тарантино получил свой второй «Оскар»</div>
                    <div className={styles.director}>Режиссёр:Квентин Тарантино</div>
                    <div className={styles.actors}>Актёры:Джейми Фокс, Кристоф Вальц, Леонардо ДиКаприо</div>
                </div>
            </div>
        </div>
    )
}

export default Banner
