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
        <div
            className={styles.main}
            style={{
                backgroundImage: `url("/image/${bannerName}")`,
            }}
        >
            <div className={styles.gradient}>
                <div className={styles.information}>
                    <img src={`/image/${logoMovieName}`} alt="" className={styles.logo} />
                    <div>
                        <div>{ratingMovie}</div>
                        <div>{yearMovie}</div>
                        <div>{genreMovie}</div>
                        <div>{timeMovie}</div>
                        <div>{languageMovie}</div>
                        <div>{ageMovie}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
