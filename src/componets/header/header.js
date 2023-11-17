import React from "react"
import styles from "./header.module.css"
import MenuItem from "./UI/menuItem/menuItem"

const Header = () => {
    return (
        <div className={styles.main}>
            <div className={styles.nav}>
                <img src={"/image/logo.png"} alt="Logo" />
                <MenuItem menuTextItem="Главная" menuLink="/" />
                <MenuItem menuTextItem="Фильмы" menuLink="/movie/:id" />
                <MenuItem menuTextItem="Сериалы" menuLink=" " />
            </div>
            <div className={styles.buttons}>
                <button className={styles.subscribe}>Купить подписку</button>
                <img src={"/image/user-logo.png"} alt="Logo-user" />
            </div>
        </div>
    )
}

export default Header
