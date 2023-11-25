import React from "react"
import Header from "../../componets/header/header"
import styles from "./subscriptionPage.module.css"
import Footer from "../../componets/footer/footer"
import Column from "./UI/column"

const SubscriptionPage = () => {
    return (
        <div>
            <Header />
            <main className={styles.main}>
                <div className={styles.first__col}>
                    <div className={styles.sub}>Выберите подписку</div>
                    <div className={styles.adven}>
                        <div className={styles.adven_item}>Более 40к фильмов, сериалов и мультфильмов</div>
                        <div className={styles.adven_item}>Прямые трансляции подкастов и стримов</div>
                        <div className={styles.adven_item}>Загрузка и просмотр без интернета</div>
                        <div className={styles.adven_item}>Просмотр TV онлайн</div>
                    </div>
                </div>
                <Column plus={"plus.png"} buttonText={"Оформить"} name={"illuminos"} />
                <Column plus={"minus.png"} buttonText={"Активировать"} name={"Без подписки"} />
            </main>
            <Footer />
        </div>
    )
}

export default SubscriptionPage
