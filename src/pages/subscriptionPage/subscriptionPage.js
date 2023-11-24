import React from "react"
import Header from "../../componets/header/header"
import styles from "./subscriptionPage.module.css"

const SubscriptionPage = () => {
    return (
        <div>
            <Header />
            <main className={styles.main}>
                <div className={styles.columns}>
                    <div className={styles.column}>
                        <div className={styles.column_item}>
                            <div className={styles.column_title}>illuminos</div>
                            <div className={styles.column_price}>
                                Месяц за <b>1$</b> , дальше - <b>19.9$/месяц</b>{" "}
                            </div>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.column_item}>
                            <div className={styles.column_title}>illuminos</div>
                            <div className={styles.column_price}>
                                Месяц за <b>1$</b> , дальше - <b>19.9$/месяц</b>{" "}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default SubscriptionPage
