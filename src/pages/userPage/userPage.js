import React, { useContext } from "react"
import Footer from "../../componets/footer/footer"
import styles from "./userPage.module.css"
import { UserContext } from "../../context/UserContext"
import MinHeader from "../../componets/min-header/min-header"
const UserPage = () => {
    const { user } = useContext(UserContext)

    return (
        <div>
            <main className={styles.main}>
                <div className={styles.menu}>
                    <MinHeader />
                    <div className={styles.user}>
                        <div>
                            <img src={"/image/user-logo.png"} alt="" />
                        </div>
                        <div>
                            <div>Login: {user.login}</div>
                            <div>Role: {user.role}</div>
                        </div>
                    </div>
                    <div>История просмотра</div>
                    <div>Подписка на сервис</div>
                    <div>Избранное</div>
                </div>
                <div className={styles.content}>
                    <div className={styles.title}>
                        Что вам может понравиться/История просмотра/Подписка на сервис/Избранное
                    </div>
                    <div className={styles.wrapper}>
                        <div className={styles.wrapper_item}></div>
                        <div className={styles.wrapper_item}></div>
                        <div className={styles.wrapper_item}></div>
                        <div className={styles.wrapper_item}></div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default UserPage
