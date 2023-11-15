import React from 'react';
import styles from './subscriptionText.module.css'

const SubscriptionText = ({subText}) => {
    return (
        <div className={styles.text}>{subText}</div>
    );
};

export default SubscriptionText;