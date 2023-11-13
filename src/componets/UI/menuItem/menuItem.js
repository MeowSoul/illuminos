import React from 'react';
import {Link} from 'react-router-dom'
import styles from './menuItem.module.css'

const MenuItem = (props) => {
    return (
        <Link to = {props.menuLink} className={styles.link}>{props.menuTextItem}</Link>
    );
};

export default MenuItem;