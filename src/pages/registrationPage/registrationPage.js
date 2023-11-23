import React from "react"
import Footer from "../../componets/footer/footer"
import styles from "./registrationPage.module.css"
import MinHeader from "../../componets/min-header/min-header"
import Userfront, { SignupForm } from "@userfront/toolkit/react"

Userfront.init("demo1234")

const RegistrationPage = () => {
    return (
        <div>
            <main className={styles.main}>
                <MinHeader />
                <SignupForm />
                {/*<div className={styles.main_form}>*/}
                {/*    <form action="" className={styles.form}>*/}
                {/*        <label className={styles.title}>Регистрация</label>*/}
                {/*        <input className={styles.field} type="text" placeholder={"Имя"} />*/}
                {/*        <input className={styles.field} type="text" placeholder={"Фамилия"} />*/}
                {/*        <input className={styles.field} type="text" placeholder={"Логин"} />*/}
                {/*        <input className={styles.field} type="text" placeholder={"Пароль"} />*/}
                {/*        <button className={styles.button} type={"submit"}>*/}
                {/*            Отправить*/}
                {/*        </button>*/}
                {/*    </form>*/}
                {/*</div>*/}
                <Footer />
            </main>
        </div>
    )
}

export default RegistrationPage
