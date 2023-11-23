import React from "react"
import styles from "./min-header.module.css"
import { Link } from "react-router-dom"

const MinHeader = () => {
    return (
        <main className={styles.main}>
            <Link to={"/"}>
                <img src={"/image/logo.png"} alt="Logo" />
            </Link>
            <div className={styles.underlining}></div>
        </main>
    )
}

export default MinHeader
