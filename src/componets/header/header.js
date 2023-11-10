import React from 'react';
import styles from './header.module.css'

const Header = () => {
    return (
        <div>
            <header className={styles.header}>
                <div>
                    <img src="" alt="logo"/>
                    <div>Главная</div>
                    <div>Фильмы</div>
                    <div>Сериалы</div>
                </div>
                <div>
                    <div>Купить подписку</div>
                    <img src="" alt="logo__user"/>
                </div>
            </header>
        </div>
    );
};

export default Header;