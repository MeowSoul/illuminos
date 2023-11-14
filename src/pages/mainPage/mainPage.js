import React from 'react';
import styles from  './mainPage.module.css'
import Header from "../../componets/header/header";
import SubscriptionText from "./UI/mainText/subscriptionText";
import MainCards from "./UI/mainCards/mainCards";
import MainGenres from "./UI/mainGenres/mainGenres";
import MainSorting from "./UI/mainSorting/mainSorting";

const MainPage = () => {
    return (
        <div>
            <Header/>
            <div className={styles.main}>
                <div className={styles.circle}></div>
                <div className={styles.main__text}>
                    <SubscriptionText text = "Подписка для лучших"/>
                    <SubscriptionText text = "Смотрите кино, сериалы и спорт"/>
                    <SubscriptionText text = "Месяц за - 1 ₽ дальше - 100 ₽/месяц"/>
                    <div className={styles.buttons}>
                        <button className={styles.button_yellow}>Купить подписку</button>
                        <button className={styles.button_black}>Подробнее</button>
                    </div>
                </div>
                <MainCards/>
            </div>
            <MainGenres/>
            <MainSorting/>
        </div>
    );
};

export default MainPage;