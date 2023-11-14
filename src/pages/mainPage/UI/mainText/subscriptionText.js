import React from 'react';
import styles from './subscriptionText.module.css'

const SubscriptionText = (props) => {
    return (
        <div className={styles.text}>{props.text}</div>
    );
};

export default SubscriptionText;