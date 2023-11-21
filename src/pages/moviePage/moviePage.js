import React from "react"
import Header from "../../componets/header/header"
import Footer from "../../componets/footer/footer"
import Banner from "../../componets/banner/banner"
import { filmData } from "../mainPage/mainPage"
import styles from "./moviePage.module.css"
const MoviePage = () => {
    return (
        <div>
            <Header />
            <main>
                <Banner
                    bannerName={"banner.jpg"}
                    logoMovieName={"django.png"}
                    ratingMovie={filmData[0].rating}
                    yearMovie={filmData[0].year}
                    genreMovie={filmData[0].genre}
                    timeMovie={filmData[0].time}
                    languageMovie={filmData[0].voice[0]}
                    ageMovie={filmData[0].ageLimit}
                />
                <div className={styles.trailer_block}>
                    <iframe
                        className={styles.trailer}
                        width="1400"
                        height="315"
                        src="https://www.youtube.com/embed/0fUCuvNlOCg?si=6AKhVEyEmK8Ae9_u"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default MoviePage
