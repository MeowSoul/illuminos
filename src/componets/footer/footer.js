import React from "react"
import styles from "./footer.module.css"
import Column from "./UI/column"
const Footer = () => {
    return (
        <div className={styles.main}>
            <div className={styles.icons}>
                <div className={styles.icons__social}>
                    <img src={"/image/gitIcon.png"} alt="" />
                    <img src={"/image/vkIcon.png"} alt="" />
                    <img src={"/image/ytIcon.png"} alt="" />
                    <img src={"/image/tgIcon.png"} alt="" />
                </div>
                <div className={styles.icons__payment}>
                    <img src={"/image/sberPay.png"} alt="" />
                    <img src={"/image/mirPay.png"} alt="" />
                </div>
                <div className={styles.icons__illuminos}>
                    <img src={"/image/logo.png"} alt="" />
                </div>
            </div>
            <div className={styles.columns}>
                <Column columnTitle={"illuminos"} columnItem={"О нас"} />
                <Column columnTitle={"Помощь"} columnItem={"Она тебе"} />
                <Column columnTitle={"Другое"} columnItem={"Туман скоро"} />
            </div>
        </div>
    )
}

export default Footer
