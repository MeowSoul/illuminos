import React from 'react';
import {Link} from 'react-router-dom'
import styles from './menuItem.module.css'

const MenuItem = ({menuLink, menuTextItem}) => {
    return (
        <Link to = {menuLink} className={styles.link}>{menuTextItem}</Link>
    );
};

export default MenuItem;