import Header from "../../componets/header/header"
import Banner from "../../componets/banner/banner"
import { seriesData } from "../mainPage/mainPage"
import styles from "../moviePage/moviePage.module.css"
import Description from "../../componets/description/description"
import Footer from "../../componets/footer/footer"
import Creators from "./UI/creators/creators"
import Choice from "./UI/choice/choice"

const SeriesPage = () => {
    return (
        <div>
            <Header />
            <main>
                <Banner
                    bannerName={"bannerSeries.jpg"}
                    logoMovieName={"gotLogo.png"}
                    ratingMovie={seriesData[0].rating}
                    yearMovie={seriesData[0].year}
                    genreMovie={seriesData[0].genre}
                    timeMovie={seriesData[0].numberSeasons}
                    languageMovie={seriesData[0].voice[0]}
                    ageMovie={seriesData[0].ageLimit}
                />
                <div className={styles.trailer_block}>
                    <iframe
                        className={styles.trailer}
                        src="https://www.youtube.com/embed/edBuDu7QE14?si=qtBFjnuU91T2JBTP"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        title="Игра престолов"
                        allowFullScreen
                    ></iframe>
                </div>
                <Choice nameChoise="Сезоны" />
                <Choice nameChoise="Серии" />
                <Creators title="Актеры" />
                <Creators title="Режиссеры" />
                <Description descriptionText="Один из самых популярных сериалов за всю историю телевидения, основанный на цикле романов Джорджа Мартина «Песнь Льда и Пламени». Пока за северной Стеной набирает силу древнее зло, представители древних родов Семи Королевств начинают борьбу за власть. Конфликт между Старками и Ланнистерами грозит перерасти в гражданскую войну, а тем временем принцесса в изгнании Дейенерис Таргариен собирает армию, чтобы вернуть себе трон отца." />
            </main>
            <Footer />
        </div>
    )
}

export default SeriesPage
