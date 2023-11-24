import React from "react"
import Header from "../../componets/header/header"
import Footer from "../../componets/footer/footer"
import Banner from "../../componets/banner/banner"
import { filmData } from "../mainPage/mainPage"
import styles from "./moviePage.module.css"
import Description from "../../componets/description/description"

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
                        src="https://www.youtube.com/embed/0fUCuvNlOCg?si=6AKhVEyEmK8Ae9_u"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
                <Description descriptionText="Человек по прозвищу Дантист — один из самых известных и кровожадных охотников за головами. Однако вечно в одиночку работать не будешь, поэтому Дантист решает найти себе напарника. Но как выбрать человека надежного, а главное, чтобы он не стоил герою целого состояния? Дантист находит выход — он берет в помощники освобожденного раба по имени Джанго. У каждого в этой паре есть свои цели." />
            </main>
            <Footer />
        </div>
    )
}

export default MoviePage
