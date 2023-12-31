import React from "react"
import styles from "./header.module.css"
import MenuItem from "./UI/menuItem/menuItem"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className={styles.main}>
            <div className={styles.nav}>
                <img src={"/image/logo.png"} alt="Logo" />
                <MenuItem menuTextItem="Главная" menuLink="/" />
                <MenuItem menuTextItem="Фильмы" menuLink="/movie/:id" />
                <MenuItem menuTextItem="Сериалы" menuLink="/series/:id" />
            </div>
            <div className={styles.buttons}>
                <Link to="/subscription">
                    <button className={styles.subscribe}>Купить подписку</button>
                </Link>
                <Link to="/registration">
                    <img className={styles.user} src={"/image/user-logo.png"} alt="Logo-user" />
                </Link>
            </div>
        </div>
    )
}

export default Header
