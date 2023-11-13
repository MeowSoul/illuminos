import React from 'react';
import styles from './header.module.css'
import MenuItem from "../UI/menuItem/menuItem";

const Header = () => {
    return (
        <div className={styles.main}>
            <div className={styles.nav}>
                <img src="" alt="Logo"/>
                <MenuItem menuTextItem = "Главная" menuLink = "/"/>
                <MenuItem menuTextItem = "Фильмы" menuLink = " "/>
                <MenuItem menuTextItem = "Сериалы" menuLink = " "/>
            </div>
            <div className={styles.buttons}>
                <button>Купить подписку</button>
                <img src="" alt="Logo-user"/>
            </div>
        </div>
    );
};

export default Header;