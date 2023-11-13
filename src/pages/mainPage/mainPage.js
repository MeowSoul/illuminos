import React from 'react';
import styles from  './mainPage.module.css'
import Header from "../../componets/header/header";
import SubscriptionText from "../../componets/UI/mainText/subscriptionText";

const MainPage = () => {
    return (
        <div>
            <Header/>
            <main className={styles.main}>
                <div className={styles.circle}></div>
                <div>
                    <div>
                        <SubscriptionText text = "Подписка для лучших"></SubscriptionText>
                        <SubscriptionText text = "Смотрите кино, сериалы и спорт"></SubscriptionText>
                        <SubscriptionText text = "Месяц за - 1 ₽ дальше - 100 ₽/месяц"></SubscriptionText>
                    </div>
                    <div>
                        <button>Купить подписку</button>
                        <button>Подробнее</button>
                    </div>
                </div>
                <div></div>
            </main>
        </div>
    );
};

export default MainPage;