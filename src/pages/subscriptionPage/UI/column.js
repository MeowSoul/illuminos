import React from "react"
import styles from "./column.module.css"

const Column = ({ plus, buttonText, name }) => {
    return (
        <main>
            <div className={styles.columns}>
                <div className={styles.column}>
                    <div className={styles.column_item}>
                        <div className={styles.column_title}>{name}</div>
                        <div className={styles.column_price}>
                            Месяц за <b>1$</b> , дальше - <b>19.9$/месяц</b>{" "}
                        </div>
                        <div className={styles.advantages}>
                            <img src={`image/${plus}`} alt="" />
                        </div>
                        <div className={styles.advantages}>
                            <img src={`/image/${plus}`} alt="" />
                        </div>
                        <div className={styles.advantages}>
                            <img src={`/image/${plus}`} alt="" />
                        </div>
                        <div className={styles.advantages}>
                            <img src={`/image/${plus}`} alt="" />
                        </div>
                    </div>
                    <div className={styles.button}>
                        <a href="http://www.sberbank.ru/ru/s_m_business/bankingservice/sberpay">{buttonText}</a>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Column
