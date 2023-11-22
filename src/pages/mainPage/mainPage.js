import React from "react"
import styles from "./mainPage.module.css"
import Header from "../../componets/header/header"
import SubscriptionText from "./UI/mainText/subscriptionText"
import MainCards from "./UI/mainCards/mainCards"
import MainFilter from "./UI/mainFilter/mainFilter"
import MainSorting from "./UI/mainSorting/mainSorting"
import Footer from "../../componets/footer/footer"

export const filmData = [
    {
        id: 1,
        name: "Джокер",
        rating: 9.8,
        year: 2007,
        genre: "Триллер",
        time: "1 ч 36 мин",
        voice: ["Rus", "Eng"],
        ageLimit: 18,
        imgName: "joker.jpg",
    },
]

export const seriesData = [
    {
        id: 1,
        name: "Игра престолов",
        rating: 9.1,
        year: 2007,
        genre: "Фантастика",
        voice: ["Rus", "Eng"],
        ageLimit: 18,
        numberSeasons: "8 сезонов",
    },
]
const MainPage = () => {
    return (
        <div>
            <Header />
            <div className={styles.main}>
                <div className={styles.circle}></div>
                <div className={styles.main__text}>
                    <SubscriptionText subText="Подписка для лучших" />
                    <SubscriptionText subText="Смотрите кино, сериалы и спорт" />
                    <SubscriptionText subText="Месяц за - 1 ₽ дальше - 100 ₽/месяц" />
                    <div className={styles.buttons}>
                        <button className={styles.button_yellow}>Купить подписку</button>
                        <button className={styles.button_black}>Подробнее</button>
                    </div>
                </div>
                <MainCards films={filmData} />
            </div>
            <MainFilter />
            <MainSorting />
            <Footer />
        </div>
    )
}

export default MainPage
