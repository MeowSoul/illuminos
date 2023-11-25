import React, { useState } from "react"
import styles from "../registrationPage/registrationPage.module.css"
import MinHeader from "../../componets/min-header/min-header"
import Footer from "../../componets/footer/footer"
import { UserServices } from "../../services/userServices"
import { AlertService } from "../../services/alertServices"

const LoginPage = () => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    async function submitHandler() {
        const result = await UserServices.authorizationAsync(login, password)
        if (result == null) {
            return AlertService.success("УСПЕШНО!!!!!!!!!!!!!!!!!!")
        }

        return AlertService.error(result.errorMessage)
    }

    return (
        <div>
            <main className={styles.main}>
                <MinHeader />
                <div className={styles.main_form}>
                    <div className={styles.form}>
                        <label className={styles.title}>Авторизация</label>
                        <input
                            className={styles.field}
                            type="text"
                            placeholder={"Логин"}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                        <input
                            className={styles.field}
                            type="text"
                            placeholder={"Пароль"}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className={styles.button} type={"submit"} onClick={async () => submitHandler()}>
                            Отправить
                        </button>
                    </div>
                </div>
                <Footer />
            </main>
        </div>
    )
}

export default LoginPage
